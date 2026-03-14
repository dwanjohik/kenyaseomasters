import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Self-contained schema — no external DB or @shared dependency required
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

    // Log inquiry server-side (replace with your DB/email/CRM integration)
    console.log('New inquiry received:', {
      ...input,
      receivedAt: new Date().toISOString(),
    });

    // TODO: Connect your database or email service here
    // e.g. send to Resend, Nodemailer, Supabase, etc.

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
