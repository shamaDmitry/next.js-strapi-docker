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
import { loginUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/forms/submit-button";
import { ZodErrors } from "@/components/errors/zod-errors";
import { StrapiErrors } from "@/components/errors/strapi-errors";

const INITIAL_STATE = { data: null, strapiErrors: null, zodErrors: null };

export function SigninForm() {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

  return (
    <div className="w-full">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="identifier" className="flex mb-2">
                Identifier
              </Label>

              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username or email"
              />

              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>

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
            <SubmitButton className="capitalize" text="Sign In" />

            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>

        <div className="mt-4 text-center text-sm">
          Dont have an account?
          <Link className="underline ml-2" href="/register">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
