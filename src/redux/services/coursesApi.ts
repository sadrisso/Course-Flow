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
    getCourse: builder.query<Course[], string>({
      query: (email) => `api/booked-courses?email=${email}`
    }),
    createCourses: builder.mutation<Course, Partial<Course>>({
      query: (newCourse) => ({
        url: "api/courses",
        method: "POST",
        body: newCourse,
      }),
    }),
    deleteCourse: builder.mutation<{ success: boolean; id: string }, string>({
      // The mutation receives the course id as string
      query: (id) => ({
        url: `api/courses/${id}`, 
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseQuery, useCreateCoursesMutation, useDeleteCourseMutation } = coursesApi;
