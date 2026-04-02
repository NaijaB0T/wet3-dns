export default function middleware(request) {
  // 1. Get the current URL details
  const url = new URL(request.url);
  
  // 2. Generate the random subdomain string
  const randomStr = Math.random().toString(36).substring(2, 8);
  
  // 3. Construct the destination using:
  //    - The new random subdomain
  //    - The original pathname (e.g., /player/16502)
  //    - The original search params (e.g., ?sd=...&skip_ad=1)
  const destination = `https://${randomStr}.wet3.click${url.pathname}${url.search}`;

  // 4. Redirect
  return Response.redirect(destination, 302);
}

export const config = {
  matcher: '/:path*',
};
