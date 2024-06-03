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

export interface ContentTestimonials extends Schema.Component {
  collectionName: 'components_content_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'repeat';
  };
  attributes: {
    testimonials: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.home-slider': ContentHomeSlider;
      'content.testimonials': ContentTestimonials;
    }
  }
}
