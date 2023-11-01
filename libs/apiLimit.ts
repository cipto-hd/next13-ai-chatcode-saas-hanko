import { NextRequest } from "next/server";

import { MAX_FREE_COUNTS } from "@/constants";
import prismadb from "@/libs/prismadb";

import { verifyAuthToken } from "./authMiddleware";

export const incrementApiLimit = async (req: NextRequest) => {
  const verifiedJWT = await verifyAuthToken(req);

  if (!verifiedJWT) {
    return;
  }

  const userId = verifiedJWT.payload.sub || "";

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, count: 1 },
    });
  }
};

export const checkApiLimit = async (req: NextRequest) => {
  const verifiedJWT = await verifyAuthToken(req);

  if (!verifiedJWT) {
    return false;
  }

  const userId = verifiedJWT.payload.sub || "";

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

/** param req/token, can be used at server component or api route */
export const getApiLimitCount = async (reqOrToken: NextRequest | string) => {
  const verifiedJWT = await verifyAuthToken(reqOrToken);

  if (!verifiedJWT) {
    return 0;
  }

  const userId = verifiedJWT.payload.sub || "";

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
