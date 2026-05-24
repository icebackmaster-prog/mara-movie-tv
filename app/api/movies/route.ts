import { NextResponse } from 'next/server';
import { fetchPopularMovies } from '@/lib/tmdb';

export async function GET() {
  try {
    const movies = await fetchPopularMovies();
    return NextResponse.json(movies);
  } catch {
    return NextResponse.json({ error: 'mara Failed to fetch movies' }, { status: 500 });
  }
}
