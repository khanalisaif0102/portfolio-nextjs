import { NextResponse } from 'next/server';
import { blogArticlesData } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(blogArticlesData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog data' },
      { status: 500 }
    );
  }
}
