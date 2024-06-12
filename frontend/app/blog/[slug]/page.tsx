import ContentCard from "@/components/custom/content/content-card";
import MainLayout from "@/components/custom/layouts/main-layout";
import { flattenAttributes, getPageData } from "@/lib/utils";
import React, { FC } from "react";
import Markdown from "react-markdown";

interface PageProps {
  params: { slug: string };
}

const Page: FC<PageProps> = async (props) => {
  const slug = props.params.slug;
  const postData = await getPageData(`/api/articles/${slug}`, "");
  const { title, content } = flattenAttributes(postData);

  return (
    <MainLayout>
      <ContentCard>
        <div className="container">
          <h1>{title}</h1>

          <Markdown>{content}</Markdown>
        </div>
      </ContentCard>
    </MainLayout>
  );
};

export default Page;
