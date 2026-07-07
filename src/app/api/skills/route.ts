import { NextResponse } from 'next/server';
import { skillsData } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(skillsData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch skills data' },
      { status: 500 }
    );
  }
}
