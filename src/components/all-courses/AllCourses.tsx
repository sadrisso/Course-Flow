import React from "react";
import Link from "next/link";

const getAllCourses = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/courses");
    if (!res.ok) throw new Error("Failed to fetch courses");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

interface Course {
  _id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
}

const AllCourses = async () => {
  const courses = await getAllCourses();
  return (
    <>
      <div className="bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center pt-4">
            Our Courses
          </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white pt-5">
          {courses?.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No courses available.
            </p>
          ) : (
            courses.map((course: Course) => (
              <div
                key={course?._id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">
                    <span className="font-medium">Category:</span>{" "}
                    {course.category}
                  </p>
                  <Link href={`courses/${course?._id}`}>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllCourses;
