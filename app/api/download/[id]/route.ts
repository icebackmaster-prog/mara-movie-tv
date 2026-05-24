import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // In a real app, get the video URL from a database or Cloudinary
  const mockUrl = `https://res.cloudinary.com/your-cloud/video/upload/mara-movies/${params.id}.mp4`;
  return NextResponse.json({ url: mockUrl });
}
