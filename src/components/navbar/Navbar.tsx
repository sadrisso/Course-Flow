"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LoginButton from "../loginButton/LoginButton";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CourseFlow
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-blue-600">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-600">
              Courses
            </Link>
          </li>
          <LoginButton />
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="#contact" className="block hover:text-blue-600">
            Blogs
          </Link>
          <li>
            <Link href="/courses" className="hover:text-blue-600">
              Courses
            </Link>
          </li>
          <LoginButton />
          <Link
            href="#start"
            className="inline-block w-full text-center mt-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
