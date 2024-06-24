import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "donate",
      payment_method_types: ["card"],
      line_items: [
        // {
        //   name: "Custom amount donation",
        //   amount: "1",
        //   currency: "usd",
        //   quantity: 1,
        // },
      ],
      success_url: `${req.headers.get(
        "origin"
      )}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get(
        "origin"
      )}/result?session_id={CHECKOUT_SESSION_ID}`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    return Response.json(checkoutSession);
  } catch (err) {
    console.log("err", err);
    return Response.json(err);
  }
}
