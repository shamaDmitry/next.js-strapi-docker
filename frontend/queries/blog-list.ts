import qs from "qs";
interface BlogListQueryProps {
  type?: string;
  searchTerm?: string;
}
export const blogListQuery = ({ type, searchTerm }: BlogListQueryProps) => {
  const typeObj =
    type !== "all"
      ? {
          article_type: {
            type: {
              $eq: type,
            },
          },
        }
      : null;

  return qs.stringify(
    {
      filters: {
        ...typeObj,
        title: {
          $containsi: searchTerm,
        },
      },
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );
};
