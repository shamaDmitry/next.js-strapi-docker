import { cn } from "@/lib/utils";
import React, { FC } from "react";

export interface ReviewsItem {
  id: string;
  title: string;
  review: string;
}

export interface ReviewsData {
  id: string;
  __component: string;
  reviews: ReviewsItem[];
}

interface ReviewsProps {
  className?: string;
  data: ReviewsItem[];
}

const Reviews: FC<ReviewsProps> = ({ className, data }) => {
  return (
    <div
      className={cn({
        [`${className}`]: className,
        "grid grid-cols-1 md:grid-cols-2 gap-4": true,
      })}
    >
      {data.map((review) => {
        return (
          <div
            key={review.id}
            className="w-full border aspect-square h-60 flex flex-col bg-white shadow rounded p-4 overflow-auto"
          >
            <h1 className="font-bold mb-4">{review.title}</h1>

            <p>{review.review}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
