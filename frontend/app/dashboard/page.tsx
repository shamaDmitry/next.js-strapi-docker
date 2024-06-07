import ContentCard from "@/components/custom/content/content-card";
import MainLayout from "@/components/custom/layouts/main-layout";
import { flattenAttributes, getPageData } from "@/lib/utils";
import React, { FC } from "react";

const Page: FC = async () => {
  const pageData = await getPageData("/api/dashboard-page", "");

  const { title, description } = flattenAttributes(pageData);

  return (
    <MainLayout>
      <ContentCard>
        <div className="container">
          <h1>{title}</h1>

          <h2>{description}</h2>
        </div>
      </ContentCard>
    </MainLayout>
  );
};

export default Page;
