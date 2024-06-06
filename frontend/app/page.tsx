import ContentCard from "@/components/custom/content/content-card";
import Reviews, { ReviewsData } from "@/components/custom/content/reviews";
import Slider, { SliderData } from "@/components/custom/content/slider";
import MainLayout from "@/components/custom/layouts/main-layout";
import {
  flattenAttributes,
  getStrapiComponent,
  getStrapiURL,
} from "@/lib/utils";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    contentSections: {
      on: {
        "content.slider": { populate: "*" },
        "content.reviews": { populate: "*" },
      },
    },
  },
});

// const homePageQuery = qs.stringify(
//   {
//     populate: {
//       contentSections: {
//         on: {
//           "content.reviews": {
//             fields: ["title"],
//             populate: {
//               customer: {
//                 fields: ["position"],
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

console.log("homePageQuery", homePageQuery);

async function getPageData(path: string) {
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const res = await getPageData("/api/home-page");

  const { title, description, contentSections } = flattenAttributes(res);

  const sliderData: SliderData = getStrapiComponent({
    componentsData: contentSections,
    componentName: "content.slider",
  });

  const reviewsData: ReviewsData = getStrapiComponent({
    componentsData: contentSections,
    componentName: "content.reviews",
  });

  return (
    <MainLayout>
      <ContentCard>
        <div className="container">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5 border-b pb-4 inline-block">
              {title}
            </h1>

            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-12">
              {description}
            </h2>
          </div>

          <div className="px-12 mb-12">
            <h3 className="px-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              Slider from cms
            </h3>

            <Slider data={sliderData.items} />
          </div>

          <div className="px-12">
            <h3 className="px-6 scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
              Reviews from cms
            </h3>

            <Reviews className="px-6" data={reviewsData.reviews} />
          </div>
        </div>
      </ContentCard>
    </MainLayout>
  );
}
