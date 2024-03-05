import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    listUsers: builder.query<ListResponse<User[]>, number | void>({
      query: (page = 1) => `/users?page=${page}`,
    }),
    getUser: builder.query<ListResponse<User>, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useListUsersQuery, useGetUserQuery } = api;
