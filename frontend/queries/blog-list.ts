import qs from "qs";
interface BlogListQueryProps {
  type?: string;
  searchTerm?: string;
  pagination?: {
    page: number;
    pageSize: number;
  };
}
export const blogListQuery = ({
  type,
  searchTerm,
  pagination,
}: BlogListQueryProps) => {
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
      pagination: pagination,
      // ...pagination,
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
