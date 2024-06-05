import { cn } from "@/lib/utils";
import React, { FC } from "react";

export interface ISliderItem {
  id: string;
  testimonials: string;
}

interface ReviewsProps {
  className?: string;
  data: ISliderItem[];
}

const Reviews: FC<ReviewsProps> = ({ className, data }) => {
  return (
    <div
      className={cn({
        [`${className}`]: className,
        "flex flex-wrap gap-4": true,
      })}
    >
      {data.map((review) => {
        return (
          <div
            key={review.id}
            className="border aspect-square h-60 flex justify-center bg-white shadow rounded p-4 overflow-auto"
          >
            {review.testimonials}
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
