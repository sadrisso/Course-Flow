"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

interface BookCourseButtonProps {
  courseId: string;
}

const BookCourseButton: React.FC<BookCourseButtonProps> = ({ courseId }) => {
  const { data: session } = useSession();
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    // Check if already booked
    fetch(
      `/api/booked-courses?courseId=${courseId}&email=${session.user.email}`
    )
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("Failed to fetch booking status");
      })
      .then((data) => {
        if (data.isBooked) {
          setIsBooked(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [session, courseId]);


  const handleBookCourse = async () => {
    if (!session?.user?.email) {
      alert("Please login to book the course.");
      return;
    }

    try {
      const res = await fetch("/api/booked-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, email: session.user.email }),
      });

      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Course Booked Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsBooked(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  if (loading) return <button disabled className="opacity-50 cursor-not-allowed px-8 py-3 rounded-lg">Loading...</button>;

  return (
    <button
      onClick={handleBookCourse}
      disabled={isBooked}
      className={`bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 
        ${isBooked ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
    >
      {isBooked ? "Booked" : "Book Course"}
    </button>
  );
};

export default BookCourseButton;
