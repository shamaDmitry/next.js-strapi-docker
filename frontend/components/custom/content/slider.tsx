import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn, getAssetURL } from "@/lib/utils";
import { ISliderItem } from "@/types/strapi";
import Image from "next/image";
import React, { FC } from "react";

interface SliderProps {
  className?: string;
  data: ISliderItem[];
}

const Slider: FC<SliderProps> = ({ className, data }) => {
  return (
    <Carousel
      className={cn({
        [`${className}`]: className,
      })}
    >
      <CarouselContent className="p-4">
        {data.map((item) => {
          const media = item.sliderMedia;

          return (
            <CarouselItem key={item.id} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center shadow-inner p-10">
                    <Image
                      className="mb-4"
                      src={`${getAssetURL()}${media.url}`}
                      alt={media.alternativeText}
                      width={media.width}
                      height={media.width}
                    />

                    <div className="text-3xl font-semibold mb-2">
                      {item.sliderTitle}
                    </div>

                    <div className="text-xl font-semibold">
                      {item.sliderDescription}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
