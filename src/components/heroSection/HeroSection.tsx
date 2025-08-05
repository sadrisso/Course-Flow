"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Navbar */}
      <nav className="container mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">EduTrack</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-blue-600">
              Courses
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#start"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-gray-700">
          <a href="#features" className="block hover:text-blue-600">
            Features
          </a>
          <a href="#courses" className="block hover:text-blue-600">
            Courses
          </a>
          <a href="#contact" className="block hover:text-blue-600">
            Contact
          </a>
          <a
            href="#start"
            className="inline-block w-full text-center mt-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="text-center md:text-left max-w-xl md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Manage Courses Effortlessly with{" "}
            <Link href="/" className="text-blue-600">EduTrack</Link>
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
            src="https://i.ibb.co.com/cNWzwsj/banner.webp"
            alt="Course Management Illustration"
            className="w-full h-auto"
          />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
