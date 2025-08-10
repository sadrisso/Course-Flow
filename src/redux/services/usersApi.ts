import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "api/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
