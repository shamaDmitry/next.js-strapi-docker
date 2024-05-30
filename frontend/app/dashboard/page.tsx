import ContentCard from "@/components/custom/content/content-card";
import MainLayout from "@/components/custom/layouts/main-layout";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <MainLayout>
      <ContentCard>
        <div className="container">
          <h1>Dashboard</h1>
        </div>
      </ContentCard>
    </MainLayout>
  );
};

export default Page;
