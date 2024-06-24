import { getAssetURL } from "@/lib/utils";
import { User } from "@/types/strapi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getAssetURL()}/api` }),
  endpoints: (builder) => ({
    // getCurrentUser: builder.query<User, string>(),
  }),
});

// export const { useGetCurrentUser } = userApi;
