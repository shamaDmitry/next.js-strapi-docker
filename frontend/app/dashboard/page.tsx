import ContentCard from "@/components/custom/content/content-card";
import MainLayout from "@/components/custom/layouts/main-layout";
import { Counter } from "@/components/custom/user/counter";
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

          <div className="max-w-sm mx-auto text-center space-y-4 mb-8">
            <h3 className="px-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              redux counter
            </h3>

            <Counter />
          </div>
        </div>
      </ContentCard>
    </MainLayout>
  );
};

export default Page;
