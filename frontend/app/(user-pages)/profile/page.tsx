import Card from "@/components/custom/content/card";
import { Headline } from "@/components/custom/content/headline";
import { UserSettingsForm } from "@/components/forms/user-settings-form";

import React, { FC } from "react";

const Page: FC = () => {
  return (
    <div>
      <Headline className="mb-6">Profile</Headline>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="User settings">
          <UserSettingsForm />
        </Card>
      </div>
    </div>
  );
};

export default Page;
