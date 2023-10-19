import authMiddleware from "@/libs/authMiddleware";

export default authMiddleware({
  publicRoutes: [process.env.NEXT_PUBLIC_HANKO_SIGN_IN_URL, "/about", "/"],
});

export const config = {
  /** guarded routes */
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
