import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { routeAccessMap } from './lib/settings'
import { NextResponse } from 'next/server'

// Create matchers for all protected routes
const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route]
}))

// console.log(matchers);

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)'
  // '/api(.*)',
  // '/$' // Home page
])

export default clerkMiddleware(async (auth, req) => {
  // 1. Allow public routes to bypass auth
  if (isPublicRoute(req)) {
    return NextResponse.next()
  }
  // 2. Get auth state
  const { userId, sessionClaims } = await auth()
  const role = (sessionClaims?.metadata as { role?: string })?.role

  // 3. Redirect unauthenticated users to sign-in
  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url)
    signInUrl.searchParams.set('redirect_url', req.url)
    return NextResponse.redirect(signInUrl)
  }
  // 4. Check route permissions
  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && !allowedRoles.includes(role!)) {
      return NextResponse.redirect(new URL(`/${role}`, req.url))
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
}
