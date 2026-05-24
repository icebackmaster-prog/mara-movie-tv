import { NextResponse } from 'next/server';
import { searchTMDB } from '@/lib/tmdb';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  if (!q) return NextResponse.json({ error: 'Missing query' }, { status: 400 });

  const results = await searchTMDB(q);
  return NextResponse.json(results);
}
