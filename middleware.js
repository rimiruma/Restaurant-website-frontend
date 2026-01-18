import { auth } from "@/auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const protectedRoutes = ["/addMenu", "/manage-items", "/add-item"];
    const isOnProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

    if (isOnProtectedRoute && !isLoggedIn) {
        return Response.redirect(new URL("/login", req.nextUrl))
    }
})

export const config = {
    // Matcher excluding api, static files, and images
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
