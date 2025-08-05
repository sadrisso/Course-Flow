"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";


const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left content */}
      <div className="text-center md:text-left max-w-xl md:pl-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Manage Courses Effortlessly with{" "}
          <Link href="/" className="text-blue-600">
            EduTrack
          </Link>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          A smart dashboard to manage your online courses, students, and
          instructors in one place.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Try it Free
        </Link>
      </div>

      {/* Right image or illustration */}
      <div className="w-full">
        <Image
          width={600}
          height={400}
          src="https://i.ibb.co/cNWzwsj/banner.webp"
          alt="Course Management Illustration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
