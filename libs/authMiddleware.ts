import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

const authMiddleware = ({
  publicRoutes = [],
}: {
  publicRoutes?: (string | undefined)[];
}) => {
  return async (req: NextRequest) => {
    const token = req.cookies.get("hanko")?.value;

    const JWKS = jose.createRemoteJWKSet(
      new URL(`${process.env.NEXT_PUBLIC_HANKO_API_URL}/.well-known/jwks.json`)
    );

    try {
      /** only allow access to public routes and sign-in route */
      let isPublicRoutes = false;
      // console.log(publicRoutes);

      [...publicRoutes, process.env.NEXT_PUBLIC_HANKO_SIGN_IN_URL].forEach(
        (r) => {
          r &&
            (isPublicRoutes ||=
              r === "/"
                ? req.nextUrl.pathname === r
                : req.nextUrl.pathname.startsWith(r));
        }
      );

      if (!isPublicRoutes) {
        const verifiedJWT = await jose.jwtVerify(token || "", JWKS);
        // console.log(verifiedJWT);
      }
    } catch {
      /** redirect to sign-in page upon unauthenticated access on guarded routes */
      return NextResponse.redirect(
        new URL(`${process.env.NEXT_PUBLIC_HANKO_SIGN_IN_URL}`, req.url)
      );
    }
  };
};

export async function verifyAuthToken(reqOrToken: NextRequest | string) {
  const token =
    typeof reqOrToken == "string"
      ? reqOrToken
      : reqOrToken.cookies.get("hanko")?.value;

  const JWKS = jose.createRemoteJWKSet(
    new URL(`${process.env.NEXT_PUBLIC_HANKO_API_URL}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jose.jwtVerify(token || "", JWKS);
    return verifiedJWT;
  } catch {
    return null;
  }
}

export function getCurrentUserEmails(reqOrToken: NextRequest | string) {
  const token =
    typeof reqOrToken == "string"
      ? reqOrToken
      : reqOrToken.cookies.get("hanko")?.value;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const currentUserEmails = fetch(
    `${process.env.NEXT_PUBLIC_HANKO_API_URL}/emails`,
    options
  )
    .then((response) => response.json())

    .catch((error) => {
      console.error(error);
      return [];
    });

  return currentUserEmails;
}

export default authMiddleware;
