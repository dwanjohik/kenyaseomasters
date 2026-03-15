import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  company: z.string().optional(),
  serviceInterest: z.enum(["seo", "web_design", "hosting", "audit", "digital_marketing"]),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = inquirySchema.parse(body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kenya SEO Masters" <${process.env.EMAIL_USER}>`,
      to: 'blockenterprisesltd@gmail.com',
      subject: `New Inquiry from ${input.name} — ${input.serviceInterest}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Phone:</strong> ${input.phone}</p>
        <p><strong>Company:</strong> ${input.company || 'N/A'}</p>
        <p><strong>Service:</strong> ${input.serviceInterest}</p>
        <p><strong>Message:</strong><br/>${input.message}</p>
        <p><strong>Received At:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Inquiry received. We will be in touch within 24 hours.' },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: err.errors[0].message, field: err.errors[0].path.join('.') },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}