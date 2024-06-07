export interface StrapiMedia {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

export interface ISliderItem {
  id: string;
  sliderTitle: string;
  sliderDescription: string;
  sliderMedia: StrapiMedia;
}

export interface SliderData {
  id: string;
  __component: string;
  items: ISliderItem[];
}

export interface ReviewsItem {
  id: string;
  title: string;
  review: string;
  customer: {
    id: string;
    fullName: string;
    position: string;
    avatar: StrapiMedia;
  };
}

export interface ReviewsData {
  id: string;
  __component: string;
  reviews: ReviewsItem[];
}