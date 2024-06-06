import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

export interface ISliderItem {
  id: string;
  sliderTitle: string;
  sliderDescription: string;
}

export interface SliderData {
  id: string;
  __component: string;
  items: ISliderItem[];
}

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
        {data.map((item) => (
          <CarouselItem key={item.id} className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center shadow-inner p-10">
                  <div className="text-3xl font-semibold">
                    {item.sliderTitle}
                  </div>

                  <div className="text-xl font-semibold">
                    {item.sliderDescription}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
