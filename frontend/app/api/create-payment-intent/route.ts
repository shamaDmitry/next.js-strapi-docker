import { CURRENCY } from "@/lib/stripe/config";
import { stripe } from "@/lib/stripe/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    const paymentIntent: Stripe.PaymentIntent =
      await stripe.paymentIntents.create({
        amount,
        currency: CURRENCY,
        automatic_payment_methods: { enabled: true },
      });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log("err", err);
    return Response.json(
      {
        error: `Internal server error ${err}`,
      },
      { status: 500 }
    );
  }
}
