"use server";

import Stripe from "stripe";
import { stripe } from "./stripe";
import { CURRENCY } from "./config";
import { formatAmountForStripe } from "./get-stripe";
import { headers } from "next/headers";

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  console.log("data createPaymentIntent", data);

  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: 1000,
      automatic_payment_methods: { enabled: true },
      currency: CURRENCY,
    });

  return { client_secret: paymentIntent.client_secret as string };
}

export async function createCheckoutSession(
  data: FormData
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;

  const origin: string = headers().get("origin") as string;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            product_data: {
              name: "Subscribe to service",
            },
            unit_amount: formatAmountForStripe(
              Number(data.get("price") as string),
              CURRENCY
            ),
          },
        },
      ],
      ...(ui_mode === "hosted" && {
        success_url: `${origin}/profile?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/profile`,
      }),
      // ...(ui_mode === "embedded" && {
      //   return_url: `${origin}/profile?session_id={CHECKOUT_SESSION_ID}`,
      // }),
      ui_mode,
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}
