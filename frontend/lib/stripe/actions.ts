"use server";

import Stripe from "stripe";
import { stripe } from "./stripe";
import { CURRENCY } from "./config";

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
