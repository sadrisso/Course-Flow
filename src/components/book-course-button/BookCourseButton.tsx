"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

interface BookCourseButtonProps {
  courseId: string;
}

const BookCourseButton: React.FC<BookCourseButtonProps> = ({ courseId }) => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    phone: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      Swal.fire("Warning", "Name and Email are required.", "warning");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to book this course?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Book it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) {
      return; // User cancelled
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/booked-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, courseId }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Course Booked Successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
        setShowModal(false);
        setFormData({
          name: session?.user?.name || "",
          email: session?.user?.email || "",
          phone: "",
          notes: "",
        });
      } else {
        Swal.fire("Error", "Something went wrong!", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to book the course.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 hover:bg-blue-700 w-full sm:w-auto"
      >
        Book Course
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 text-black">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 p-6 relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
              Book This Course
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Any special request..."
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-700 disabled:opacity-50"
              >
                {submitting ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCourseButton;
