import { SignupForm } from "@/components/forms/sign-up-form";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <section className="container">
      <div className="w-full max-w-screen-sm mx-auto">
        <SignupForm />
      </div>
    </section>
  );
};

export default Page;
