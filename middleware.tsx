import authMiddleware from "@/libs/authMiddleware";

export default authMiddleware({
  publicRoutes: ["/", "/api/stripe-webhook"],
});

export const config = {
  /** guarded routes */
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
