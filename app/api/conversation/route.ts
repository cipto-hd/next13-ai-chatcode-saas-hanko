import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import { checkApiLimit, incrementApiLimit } from "@/libs/apiLimit";
import { verifyAuthToken } from "@/libs/authMiddleware";
import { checkSubscription } from "@/libs/subscription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const verifiedJWT = await verifyAuthToken(req);
    const body = await req.json();
    const { messages } = body;

    if (!verifiedJWT) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit(req);
    const isPro = await checkSubscription(req);

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    if (!isPro) {
      await incrementApiLimit(req);
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
