import BlogList from "@/components/custom/blog/blog-list";
import ContentCard from "@/components/custom/content/content-card";
import MainLayout from "@/components/custom/layouts/main-layout";
import { flattenAttributes, getPageData } from "@/lib/utils";
import { Post } from "@/types/strapi";
import React, { FC } from "react";
import qs from "qs";

interface BlogPosts {
  data: Post[];
}

// export const homePageQuery = qs.stringify(
//   {
//     populate: {
//       contentSections: {
//         populate: true,
//         on: {
//           "content.slider": {
//             populate: {
//               items: {
//                 populate: "*",
//               },
//             },
//           },
//           "content.reviews": {
//             populate: {
//               reviews: {
//                 populate: {
//                   customer: {
//                     populate: "*",
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   {
//     encodeValuesOnly: true,
//   }
// );

const blogListQuery = qs.stringify({
  populate: "*",
});

const Page: FC = async () => {
  const pageData = await getPageData("/api/blog-page", "");

  const postsData = await getPageData("/api/articles", blogListQuery);
  const posts: BlogPosts = flattenAttributes(postsData);

  const { title, description } = flattenAttributes(pageData);

  return (
    <MainLayout>
      <ContentCard>
        <div className="container">
          <h1>{title}</h1>
          <h2>{description}</h2>

          <div className="py-2">
            <BlogList data={posts.data} />
          </div>
        </div>
      </ContentCard>
    </MainLayout>
  );
};

export default Page;
