import Card from "@/components/custom/content/card";
import { Headline } from "@/components/custom/content/headline";
import ActiveUsersChart from "@/components/pages/dashboard/active-users-chart";
import { flattenAttributes, getPageData } from "@/lib/utils";
import React, { FC } from "react";

const Page: FC = async () => {
  const pageData = await getPageData("/api/dashboard-page", "");

  const { title, description } = flattenAttributes(pageData);

  return (
    <div>
      <Headline className="mb-8">{title}</Headline>

      <Headline tag="h2" className="mb-12">
        {description}
      </Headline>

      <div className="grid grid-cols-2 gap-6">
        <Card title="Montly Active Users (in K)">
          <ActiveUsersChart className="h-96" />
        </Card>

        <Card title="Montly Active Users (in K)">
          <ActiveUsersChart className="h-96" />
        </Card>
      </div>
    </div>
  );
};

export default Page;
