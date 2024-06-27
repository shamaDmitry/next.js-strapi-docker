"use client";

import { Button } from "@/components/ui/button";
import { createPaymentIntent } from "@/lib/stripe/actions";
import getStripe from "@/lib/stripe/get-stripe";

import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { useState } from "react";
import PaymentStatus from "./strapi/payment-status";

interface PaymentFormState {
  customDonation: number;
  cardholderName: string;
}

interface PaymentState {
  status: "initial" | "processing" | "error";
}

function CheckoutForm() {
  const [input, setInput] = useState<PaymentFormState>({
    customDonation: 10,
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

    console.log("input", input);

    elements?.update({ amount: input.customDonation });
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
          return_url: `${window.location.origin}/profile`,
          payment_method_data: {
            billing_details: {
              name: input.cardholderName,
            },
          },
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
        <input
          type="number"
          className="border w-full px-4 py-2 rounded"
          name="customDonation"
          value={input.customDonation}
          onChange={handleInputChange}
        />

        <fieldset className="elements-style">
          <legend>Your payment details:</legend>

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

          <div className="py-4">
            <PaymentElement
              onChange={(e) => {
                setPaymentType(e.value.type);
              }}
            />
          </div>
        </fieldset>

        <Button
          className="elements-style-background"
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
  return (
    <Elements
      stripe={getStripe()}
      options={{
        appearance: {
          variables: {
            colorIcon: "#6772e5",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          },
        },
        currency: "usd",
        mode: "payment",
        amount: 1000,
      }}
    >
      <CheckoutForm />
    </Elements>
  );
}
