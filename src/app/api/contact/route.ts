import { NextResponse } from 'next/server';
import { contactData } from '@/lib/data';

/**
 * GET /api/contact
 * Returns the portfolio owner's contact information
 * (email, LinkedIn, GitHub) used to populate the Contact section.
 */
export async function GET() {
  try {
    return NextResponse.json(contactData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch contact data' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/contact
 * Receives a contact form submission (name, email, message),
 * validates it server-side, and confirms receipt.
 *
 * Note: this does not currently send a real email — it simply
 * validates and acknowledges the submission. To deliver messages
 * to an inbox, connect a service like Resend or EmailJS here.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic server-side validation (mirrors the client-side checks)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission for now (visible in Vercel's function logs)
    console.log('Contact form submission received:', { name, email, message });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}