import BookCourseButton from "@/components/book-course-button/BookCourseButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

interface Course {
  _id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
}

interface ApiResponse {
  data: Course;
}

const getSingleCourseData = async (id: string): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3000/api/courses/${id}`);
  if (!res.ok) throw new Error("Failed to fetch single course data");
  return res.json();
};

const CoursesDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  console.log("User email:", session?.user?.email);

  const response = await getSingleCourseData(id);
  const singleCourseData = response.data;

  return (
    <>
      <div className="bg-white pt-10">
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-lg">
          {/* Header Section */}
          <div className="mb-6 border-b pb-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {singleCourseData.title}
            </h1>
            <p className="text-gray-500 text-sm">
              Taught by{" "}
              <span className="font-semibold text-gray-700">
                {singleCourseData.instructor}
              </span>
            </p>
          </div>

          {/* Course Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-8">
            <div>
              <p className="mb-2">
                <span className="font-medium">Category:</span>{" "}
                {singleCourseData.category}
              </p>
              <p className="mb-2">
                <span className="font-medium">Level:</span>{" "}
                {singleCourseData.level}
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-medium">Duration:</span>{" "}
                {singleCourseData.duration}
              </p>
              <p className="mb-2">
                <span className="font-medium">Course ID:</span>{" "}
                {singleCourseData._id}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Course Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {singleCourseData.description}
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <BookCourseButton courseId={singleCourseData?._id}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesDetails;
