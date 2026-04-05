import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { z } from "zod";

const SupportSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
  category: z.enum(["ORDER", "PRODUCT", "REPAIR", "CERTIFICATION", "GENERAL"]),
});

// Simple in-memory rate limit (per IP per 10 min)
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
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const body = await req.json();
    const parsed = SupportSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data", details: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    const ticket = await prisma.supportTicket.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        category: data.category,
      },
    });

    // Notify team
    resend.emails.send({
      from: "BJ Jewelry Support <support@bjjewelry.in>",
      to: "support@bjjewelry.in",
      subject: `[Support #${ticket.id.slice(-6).toUpperCase()}] ${data.subject}`,
      html: `
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Phone:</strong> ${data.phone ?? "—"}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
    }).catch(console.error);

    // Auto-reply to customer
    resend.emails.send({
      from: "BJ Jewelry <support@bjjewelry.in>",
      to: data.email,
      subject: `We received your message – BJ Jewelry`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:auto;background:#fff;border:1px solid #C9A84C;padding:40px;">
          <h1 style="color:#C9A84C;">BJ Jewelry</h1>
          <p>Dear ${data.name},</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>Your ticket reference: <strong>#${ticket.id.slice(-6).toUpperCase()}</strong></p>
          <p>For urgent matters, WhatsApp us at <strong>+91 9444963811</strong>.</p>
        </div>
      `,
    }).catch(console.error);

    return NextResponse.json({ success: true, ticketId: ticket.id });
  } catch (error) {
    console.error("Support ticket error:", error);
    return NextResponse.json({ error: "Failed to submit ticket" }, { status: 500 });
  }
}
