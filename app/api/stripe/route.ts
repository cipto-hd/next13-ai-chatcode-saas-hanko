import { NextRequest, NextResponse } from "next/server";

import { getCurrentUserEmails, verifyAuthToken } from "@/libs/authMiddleware";
import prismadb from "@/libs/prismadb";
import stripe from "@/libs/stripe";
import { absoluteUrl } from "@/libs/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET(req: NextRequest) {
  try {
    const verifiedJWT = await verifyAuthToken(req);

    if (!verifiedJWT) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const currentUserEmails = await getCurrentUserEmails(req);

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId: verifiedJWT.payload.sub,
      },
    });

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: currentUserEmails[0].address,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Wasis Pro",
              description: "Unlimited AI Generations",
            },
            unit_amount: 2000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: verifiedJWT.payload.sub || null,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
