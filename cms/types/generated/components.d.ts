import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentHomeSlider extends Schema.Component {
  collectionName: 'components_content_home_sliders';
  info: {
    displayName: 'SliderItem';
    icon: '';
    description: '';
  };
  attributes: {
    sliderTitle: Attribute.String;
    sliderMedia: Attribute.Media;
    sliderDescription: Attribute.Text;
  };
}

export interface ContentPostsList extends Schema.Component {
  collectionName: 'components_content_posts_lists';
  info: {
    displayName: 'PostsList';
    description: '';
  };
  attributes: {};
}

export interface ContentReviewItem extends Schema.Component {
  collectionName: 'components_content_review_items';
  info: {
    displayName: 'ReviewItem';
  };
  attributes: {
    title: Attribute.String;
    review: Attribute.Text;
    customer: Attribute.Relation<
      'content.review-item',
      'oneToOne',
      'api::customer.customer'
    >;
  };
}

export interface ContentReviews extends Schema.Component {
  collectionName: 'components_content_reviews';
  info: {
    displayName: 'ReviewSection';
    description: '';
  };
  attributes: {
    reviews: Attribute.Component<'content.review-item', true>;
  };
}

export interface ContentSlider extends Schema.Component {
  collectionName: 'components_content_sliders';
  info: {
    displayName: 'Slider';
    icon: '';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'content.home-slider', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.home-slider': ContentHomeSlider;
      'content.posts-list': ContentPostsList;
      'content.review-item': ContentReviewItem;
      'content.reviews': ContentReviews;
      'content.slider': ContentSlider;
    }
  }
}
