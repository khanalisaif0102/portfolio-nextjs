import { NextResponse } from 'next/server';
import { contactData } from '@/lib/data';

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
