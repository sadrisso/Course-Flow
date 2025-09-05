"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="container bg-white mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left content with animation */}
      <motion.div
        className="text-center md:text-left  md:pl-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Manage Courses Effortlessly with{" "}
          <Link href="/" className="text-blue-600">
            CourseFlow
          </Link>
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-600 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A smart dashboard to manage your online courses, students, and
          instructors in one place.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/dashboard"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Try it Free
          </Link>
        </motion.div>
      </motion.div>

      {/* Right image with animation */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          width={600}
          height={600}
          src="https://i.ibb.co/cNWzwsj/banner.webp"
          alt="Course Management Illustration"
          className="w-full h-auto max-w-lg md:max-w-xl"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
