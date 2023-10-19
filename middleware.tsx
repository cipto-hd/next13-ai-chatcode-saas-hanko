import authMiddleware from "@/libs/authMiddleware";

export default authMiddleware({
  publicRoutes: ["/", "/about"],
});

export const config = {
  /** guarded routes */
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
