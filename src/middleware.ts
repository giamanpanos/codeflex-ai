import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// We created the isProtectedRoute function to put the routes that we want to protect and only displayed tpp authenticated users. Then in the clerkMiddleware we put the auth and request and then if the route is a protected one, we redirect users to the sign in page if not logged in
const isProtectedRoute = createRouteMatcher(["generate-program", "profile"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
