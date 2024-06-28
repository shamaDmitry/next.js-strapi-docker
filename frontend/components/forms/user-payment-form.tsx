"use client";

import { Button } from "@/components/ui/button";
import { createPaymentIntent } from "@/lib/stripe/actions";
import getStripe, { formatAmountForStripe } from "@/lib/stripe/get-stripe";

import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import PaymentStatus from "./strapi/payment-status";
import { CURRENCY } from "@/lib/stripe/config";
import Spinner from "@/components/custom/content/spinner";

interface PaymentFormState {
  customDonation: number;
  cardholderName: string;
}

interface PaymentState {
  status: "initial" | "processing" | "error";
}

function CheckoutForm({ amount }: { amount: number }) {
  const [input, setInput] = useState<PaymentFormState>({
    customDonation: amount,
    cardholderName: "",
  });

  const [paymentType, setPaymentType] = useState<string>("");

  const [payment, setPayment] = useState<PaymentState>({ status: "initial" });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    elements?.update({
      amount: formatAmountForStripe(input.customDonation, CURRENCY),
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      // Abort if form isn't valid
      if (!e.currentTarget.reportValidity()) return;
      if (!elements || !stripe) return;

      setPayment({ status: "processing" });

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setPayment({ status: "error" });
        setErrorMessage(submitError.message ?? "An unknown error occurred");

        return;
      }

      // Create a PaymentIntent with the specified amount.
      const { client_secret: clientSecret } = await createPaymentIntent(
        new FormData(e.target as HTMLFormElement)
      );

      // Use your card Element with other Stripe.js APIs
      const { error: confirmError } = await stripe!.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/thank-you?amount=${input.customDonation}`,
          // payment_method_data: {
          //   billing_details: {
          //     name: input.cardholderName,
          //   },
          // },
        },
      });

      if (confirmError) {
        setPayment({ status: "error" });
        setErrorMessage(confirmError.message ?? "An unknown error occurred");
      }
    } catch (err) {
      const { message } = err as StripeError;

      setPayment({ status: "error" });
      setErrorMessage(message ?? "An unknown error occurred");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block">Custom Donation</label>
          <input
            type="number"
            className="border w-full px-4 py-2 rounded"
            name="customDonation"
            value={input.customDonation}
            onChange={handleInputChange}
          />
        </div>

        <fieldset className="">
          <legend className="mb-2">Your payment details:</legend>

          {paymentType === "card" ? (
            <input
              placeholder="Cardholder name"
              className="border w-full px-4 py-2 rounded"
              type="Text"
              name="cardholderName"
              onChange={handleInputChange}
              required
            />
          ) : null}

          {!stripe || !elements ? (
            <Spinner className="size-10 border-4 border-t-blue-600" />
          ) : (
            <div className="py-4">
              <PaymentElement
                onChange={(e) => {
                  setPaymentType(e.value.type);
                }}
              />
            </div>
          )}
        </fieldset>

        <Button
          type="submit"
          disabled={
            !["initial", "succeeded", "error"].includes(payment.status) ||
            !stripe
          }
        >
          Donate {input.customDonation}
        </Button>
      </form>
      <PaymentStatus status={payment.status} errorMessage={errorMessage} />
    </>
  );
}

export function UserPaymentForm() {
  const amount = 100;

  return (
    <Elements
      stripe={getStripe()}
      options={{
        appearance: {
          labels: "floating",
          variables: {
            colorIcon: "#6772e5",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          },
        },
        currency: "usd",
        mode: "payment",
        amount,
      }}
    >
      <CheckoutForm amount={amount} />
    </Elements>
  );
}
