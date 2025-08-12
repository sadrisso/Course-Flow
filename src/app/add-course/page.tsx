"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AddCourse() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    duration: "",
    level: "",
    instructor: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/courses");
        setFormData({
          title: "",
          category: "",
          description: "",
          duration: "",
          level: "",
          instructor: "",
        });
      } else {
        alert("Failed to add course.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white text-black p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Course</h2>

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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
