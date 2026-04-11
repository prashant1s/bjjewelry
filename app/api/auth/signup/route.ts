import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Extract the new fields we sent from the frontend
    const { name, email, password, companyName, phone, businessType } = body;

    // Validate that all required B2B fields are present
    if (!email || !password || !name || !companyName || !phone || !businessType) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // Hash the password
    const passwordHash = await hash(password, 10);

    // Create the user with the new B2B data
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "CUSTOMER", 
        // 👇 New B2B Fields saved to database
        companyName,
        phone,
        businessType,
      },
    });

    return NextResponse.json(
      { message: "Account created successfully", id: user.id },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Signup Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
