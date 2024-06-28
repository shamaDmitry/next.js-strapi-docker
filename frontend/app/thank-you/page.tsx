import { CURRENCY } from "@/lib/stripe/config";
import Link from "next/link";
import { FC } from "react";

interface PageProps {
  searchParams: {
    amount: string;
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  };
}

const Page: FC<PageProps> = async ({ searchParams: { amount } }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold">Thank You !</h1>
          <p className="space-x-1">
            <span>Thank you for donation</span>
            <span className="font-bold uppercase">
              {amount} {CURRENCY}
            </span>
          </p>

          <Link
            href="/"
            className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-medium"> Home </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
