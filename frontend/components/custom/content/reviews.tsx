import { cn, getAssetURL } from "@/lib/utils";
import { ReviewsItem } from "@/types/strapi";
import Image from "next/image";
import React, { FC } from "react";

interface ReviewsProps {
  className?: string;
  data: ReviewsItem[];
}

const Reviews: FC<ReviewsProps> = ({ className, data }) => {
  return (
    <div
      className={cn({
        [`${className}`]: className,
        "grid grid-cols-1 md:grid-cols-2 gap-8": true,
      })}
    >
      {data.map((review) => {
        const media = review.customer.avatar;

        return (
          <div key={review.id} className="bg-white p-4 rounded">
            <blockquote className="mb-3 mt-0 border-0 p-0 text-2xl font-bold text-title lg:mb-5 lg:text-[28px] lg:leading-[36px]">
              <p className="m-0">
                <span>{review.title}</span>
              </p>
            </blockquote>

            <p className="m-0 mb-3 text-base italic text-text-light lg:min-h-[180px] lg:text-lg">
              {review.review}
            </p>

            {review.customer && (
              <div className="flex items-center gap-7">
                <div className="relative shrink-0">
                  <Image
                    className="m-0 size-20 rounded-full lg:size-28 object-cover"
                    src={`${getAssetURL()}${media.url}`}
                    alt={media.alternativeText}
                    height={media.height}
                    width={media.width}
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="mb-1 text-sm font-bold uppercase tracking-[2.4px] text-title lg:mb-3 lg:text-base">
                    {review.customer.fullName}
                  </strong>

                  <span className="text-sm text-text-light lg:text-sm">
                    {review.customer.position}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
