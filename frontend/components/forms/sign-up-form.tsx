"use client";

import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { registerUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { ZodErrors } from "@/components/errors/zod-errors";
import { StrapiErrors } from "@/components/errors/strapi-errors";
import { SubmitButton } from "@/components/forms/submit-button";

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  zodErrors: null,
};

export function SignupForm() {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );

  console.log("formState", formState);

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="">
              <Label htmlFor="username" className="flex mb-2">
                Username
              </Label>

              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
              />

              <ZodErrors error={formState?.zodErrors?.username} />
            </div>

            <div className="">
              <Label htmlFor="email" className="flex mb-2">
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />

              <ZodErrors error={formState?.zodErrors?.email} />
            </div>

            <div className="">
              <Label htmlFor="password" className="flex mb-2">
                Password
              </Label>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />

              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col">
            <SubmitButton
              className="border py-2 px-3 rounded capitalize"
              text="register"
            />

            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>

        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href="signin">
            Sing In
          </Link>
        </div>
      </form>
    </div>
  );
}
