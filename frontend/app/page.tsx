import ContentCard from "@/components/custom/content/content-card";
import { Headline } from "@/components/custom/content/headline";
import Reviews from "@/components/custom/content/reviews";
import Slider from "@/components/custom/content/slider";
import MainLayout from "@/components/custom/layouts/main-layout";
import { Counter } from "@/components/custom/user/counter";
import {
  flattenAttributes,
  getPageData,
  getStrapiComponent,
} from "@/lib/utils";
import { homePageQuery } from "@/queries/homepage";
import { ReviewsData, SliderData } from "@/types/strapi";

export default async function Home() {
  const res = await getPageData("/api/home-page", homePageQuery);

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
            <Headline className="mb-8">{title}</Headline>

            <Headline tag="h2" className="mb-12">
              {description}
            </Headline>
          </div>

          <div className="max-w-sm mx-auto text-center space-y-4 mb-8">
            <Headline tag="h3" className="mb-2">
              Redux counter
            </Headline>

            <Counter />
          </div>

          <div className="px-12 mb-12">
            <Headline tag="h3" className="mb-2 px-6">
              Slider from cms
            </Headline>

            <Slider data={sliderData.items} />
          </div>

          <div className="px-12">
            <Headline tag="h3" className="mb-2 px-6">
              Reviews from cms
            </Headline>

            <Reviews className="px-6" data={reviewsData.reviews} />
          </div>
        </div>
      </ContentCard>
    </MainLayout>
  );
}
