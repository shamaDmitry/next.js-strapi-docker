import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentHomeSlider extends Schema.Component {
  collectionName: 'components_content_home_sliders';
  info: {
    displayName: 'SliderItem';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    sliderTitle: Attribute.String;
    sliderMedia: Attribute.Media;
    sliderDescription: Attribute.Text;
  };
}

export interface ContentReviews extends Schema.Component {
  collectionName: 'components_content_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'content.testimonials', true>;
  };
}

export interface ContentSlider extends Schema.Component {
  collectionName: 'components_content_sliders';
  info: {
    displayName: 'Slider';
    icon: 'code';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'content.home-slider', true>;
  };
}

export interface ContentTestimonials extends Schema.Component {
  collectionName: 'components_content_testimonials';
  info: {
    displayName: 'TestimonialsItem';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.home-slider': ContentHomeSlider;
      'content.reviews': ContentReviews;
      'content.slider': ContentSlider;
      'content.testimonials': ContentTestimonials;
    }
  }
}
