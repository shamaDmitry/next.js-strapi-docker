import { SigninForm } from "@/components/forms/sign-in-form";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <section className="container">
      <div className="w-full max-w-screen-sm mx-auto">
        <SigninForm />
      </div>
    </section>
  );
};

export default Page;
