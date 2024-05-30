import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentHomeSlider extends Schema.Component {
  collectionName: 'components_content_home_sliders';
  info: {
    displayName: 'Home Slider';
    icon: 'dashboard';
  };
  attributes: {
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.home-slider': ContentHomeSlider;
    }
  }
}
