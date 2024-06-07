import qs from "qs";

export const homePageQuery = qs.stringify(
  {
    populate: {
      contentSections: {
        populate: true,
        on: {
          "content.slider": {
            populate: {
              items: {
                populate: "*",
              },
            },
          },
          "content.reviews": {
            populate: {
              reviews: {
                populate: {
                  customer: {
                    populate: "*",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);
