"use client";

import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/lib/stripe/actions";
import { useState } from "react";
import type Stripe from "stripe";

interface Input {
  price: number;
}

const SubscribePlan = () => {
  const [loading] = useState<boolean>(false);

  const [input, setInput] = useState<Input>({
    price: 19,
  });

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
  //   e
  // ): void =>
  //   setInput({
  //     ...input,
  //     [e.currentTarget.name]: e.currentTarget.value,
  //   });

  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get(
      "uiMode"
    ) as Stripe.Checkout.SessionCreateParams.UiMode;
    const { client_secret, url } = await createCheckoutSession(data);

    if (uiMode === "embedded") return setClientSecret(client_secret);

    window.location.assign(url as string);
  };

  return (
    <form action={formAction}>
      <input type="hidden" name="uiMode" value="hosted" />
      <input type="hidden" name="price" value={input.price} />

      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
          <h2 className="text-2xl font-semibold text-white">Pro Plan</h2>
          <p className="text-gray-200">Perfect for professionals</p>
        </div>
        <div className="px-6 py-4">
          <div className="text-4xl font-bold text-gray-800">
            $19<span className="text-lg text-gray-600">/month</span>
          </div>
          <p className="text-gray-600">Billed annually</p>
        </div>
        <div className="px-6 py-4">
          <ul className="text-gray-600">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Unlimited projects
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              24/7 customer support
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Access to premium templates
            </li>
          </ul>
        </div>
        <div className="px-6 pt-4 pb-6">
          <Button
            type="submit"
            className="block w-full px-4 py-2 font-semibold text-center text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none capitalize"
          >
            subscribe
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SubscribePlan;
