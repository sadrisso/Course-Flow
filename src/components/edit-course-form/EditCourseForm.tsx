"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

type CourseData = {
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
};


type EditCourseFormProps = {
  id: string;
  data: Partial<CourseData>;
};

function EditCourseForm({ id, data }: EditCourseFormProps) {
  const router = useRouter();

  // Initialize formData with existing course data on mount
  const [formData, setFormData] = useState<Partial<CourseData>>({
    title: "",
    category: "",
    description: "",
    duration: "",
    level: "",
    instructor: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/courses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formData }), // include id in body
      });

      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Course updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/courses");
      } else {
        alert("Failed to update course.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <div className="bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white text-black p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Edit Course
          </h2>

          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>

          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g. 6 weeks)"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="text"
            name="level"
            placeholder="Level (e.g. Beginner, Intermediate, Advanced)"
            value={formData.level}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="text"
            name="instructor"
            placeholder="Instructor Name"
            value={formData.instructor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCourseForm;
