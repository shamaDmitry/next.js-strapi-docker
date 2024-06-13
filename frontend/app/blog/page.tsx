import BlogList from "@/components/custom/blog/blog-list";
import ContentCard from "@/components/custom/content/content-card";
import MainLayout from "@/components/custom/layouts/main-layout";
import { flattenAttributes, getPageData } from "@/lib/utils";
import React, { FC, Suspense } from "react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/custom/content/page-header";
import SearchField from "@/components/custom/blog/search-field";
import TypeSelector from "@/components/custom/blog/type-selector";
import { Loader2 } from "lucide-react";
import CustomPagination from "@/components/custom/blog/custom-pagination";

const Page: FC = async ({
  searchParams,
}: {
  searchParams?: {
    searchTerm?: string;
    type?: string;
  };
}) => {
  const searchTerm = searchParams?.searchTerm;
  const type = searchParams?.type;

  const pageData = await getPageData("/api/blog-page", "");
  const { title, description } = flattenAttributes(pageData);
  const allTypes = flattenAttributes(
    await getPageData("/api/article-types", "")
  );

  console.log("type", type);

  return (
    <MainLayout>
      <ContentCard>
        <div className="container">
          <PageHeader>
            <PageHeaderHeading>{title}</PageHeaderHeading>

            <PageHeaderDescription>{description}</PageHeaderDescription>
          </PageHeader>

          <div className="flex flex-col md:flex-row gap-4 items-center mb-4 justify-between border-b pb-4">
            <TypeSelector types={allTypes.data} />

            <SearchField />
          </div>

          <div className="bg-white p-4">
            <Suspense
              fallback={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            >
              <BlogList
                searchTerm={searchTerm}
                type={type ? type : "all"}
                className="mb-8"
              />
            </Suspense>

            <CustomPagination />
          </div>
        </div>
      </ContentCard>
    </MainLayout>
  );
};

export default Page;
