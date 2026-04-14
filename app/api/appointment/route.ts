import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendAppointmentConfirmation } from "@/lib/resend";
import { z } from "zod";

// Validate incoming data
const AppointmentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  date: z.string(), // e.g., "2026-05-20"
  timeSlot: z.string(),
  type: z.enum(["IN_STORE", "VIDEO_CONSULTATION"]),
  location: z.string(),
  message: z.string().optional(),
});

// Reuse your rate limiter (max 3 bookings per 10 mins)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (limit.count >= 3) return false;
  limit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  try {
    const body = await req.json();
    const parsed = AppointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data", details: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    // 1. Save to the Prisma Appointment Table
    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        // Prisma requires a DateTime object, so we convert the YYYY-MM-DD string
        date: new Date(data.date), 
        timeSlot: data.timeSlot,
        type: data.type,
        location: data.location,
        message: data.message,
      },
    });

    // 2. Send the beautiful confirmation email to the customer
    const appointmentTypeStr = data.type === "IN_STORE" ? "In-Store Visit" : "Video Consultation";
    
    await sendAppointmentConfirmation(
      data.email,
      data.name,
      data.date,
      data.timeSlot,
      appointmentTypeStr
    );

    // 3. (Optional) You could also add a quick resend.emails.send() here to notify your staff!

    return NextResponse.json({ success: true, appointmentId: appointment.id });
  } catch (error) {
    console.error("Appointment error:", error);
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 });
  }
}