import { ActiveUsersChart } from "@/components/pages/dashboard/active-users-chart";
import { flattenAttributes, getPageData } from "@/lib/utils";
import React, { FC } from "react";

const Page: FC = async () => {
  const pageData = await getPageData("/api/dashboard-page", "");

  const { title, description } = flattenAttributes(pageData);

  return (
    <div className="">
      <h1>{title}</h1>

      <h2>{description}</h2>

      <div className="h-96 py-5">
        <ActiveUsersChart />
      </div>
    </div>
  );
};

export default Page;
