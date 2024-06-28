import Card from "@/components/custom/content/card";
import { Headline } from "@/components/custom/content/headline";
import SubscribePlan from "@/components/forms/strapi/subscribe-plan";
import { UserPaymentForm } from "@/components/forms/user-payment-form";
import { UserSettingsForm } from "@/components/forms/user-settings-form";

import React, { FC } from "react";

const Page = () => {
  return (
    <div>
      <Headline className="mb-6">Profile</Headline>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="User settings">
          <UserSettingsForm />
        </Card>

        <Card title="Stripe payment">
          <UserPaymentForm />
        </Card>

        <Card title="Subscribe">
          <SubscribePlan />
        </Card>
      </div>
    </div>
  );
};

export default Page;
