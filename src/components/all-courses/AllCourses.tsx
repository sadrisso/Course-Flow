"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useGetCoursesQuery } from "@/redux/services/coursesApi";

export default function AllCourses() {
  const { data: courses, error, isLoading } = useGetCoursesQuery();
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/courses/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete course");
      }

      alert("Course deleted successfully");
      // Refresh the page or update your UI state to remove the deleted course
      router.refresh();
    } catch (error) {
      console.error("Delete error:", error);
      alert("There was an error deleting the course");
    }
  };

  if (isLoading) return <p className="text-black">Loading...</p>;

  if (error) return <p className="text-black">There is an error</p>;

  return (
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
          courses?.map((course) => (
            <div
              key={course._id}
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
                <div className="flex gap-2 mt-3">
                  <Link href={`courses/${course._id}`} className="flex-1">
                    <button className="w-full bg-blue-600 text-white text-sm py-1.5 px-3 rounded-md hover:bg-blue-700 transition duration-200">
                      View
                    </button>
                  </Link>

                  {session?.user?.role === "admin" && (
                    <>
                      <button
                        className="flex-1 bg-green-600 text-white text-sm py-1.5 px-3 rounded-md hover:bg-green-700 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course?._id)}
                        className="flex-1 bg-red-600 text-white text-sm py-1.5 px-3 rounded-md hover:bg-red-700 transition duration-200"
                      >
                        Del
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
