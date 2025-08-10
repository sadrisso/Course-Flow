import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Course {
  _id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
}

export const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      query: () => "api/courses",
    }),
    createCourses: builder.mutation<Course, Partial<Course>>({
      query: (newCourse) => ({
        url: "api/courses",
        method: "POST",
        body: newCourse,
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useCreateCoursesMutation } = coursesApi;
