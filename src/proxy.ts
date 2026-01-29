import { withAuth } from "next-auth/middleware";

const authMiddleware = withAuth({
  callbacks: {
    authorized: ({ token }) => !!token, 
  },
});

export const proxy = authMiddleware;

export const config = {
  matcher: ["/dashboard/:path*"],
};