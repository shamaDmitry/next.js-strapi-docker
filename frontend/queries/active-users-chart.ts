import qs from "qs";

export const activeUsersChart = qs.stringify(
  {
    populate: {
      content: {
        populate: true,
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);
