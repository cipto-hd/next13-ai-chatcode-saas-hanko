import { NextRequest } from "next/server";

import prismadb from "@/libs/prismadb";

import { verifyAuthToken } from "./authMiddleware";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async (reqOrToken: NextRequest | string) => {
  const verifiedJWT = await verifyAuthToken(reqOrToken);

  if (!verifiedJWT) {
    return false;
  }

  const userId = verifiedJWT.payload.sub || "";

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
