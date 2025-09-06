"use client";
import React, { useState } from "react";
import { Menu, UserCircleIcon, X } from "lucide-react";
import Link from "next/link";
import LoginButton from "../loginButton/LoginButton";
import { useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const desktopLinks = () => {
    return (
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
        {session?.user.role === "admin" && (
          <li>
            <Link href="/add-course" className="hover:text-blue-600">
              Add Course
            </Link>
          </li>
        )}
        {session?.user && (
          <li>
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>
        )}
      </ul>
    );
  };
  

  if (status === "loading") return <p>Loading...</p>;

  return (
    <nav className="bg-white md:sticky md:top-0 md:z-50">
      <div className="container mx-auto px-4 md:px-24 py-4 md:py-6 shadow-md flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-orange-600">
          CourseFlow
        </Link>

        {/* Desktop Menu */}
        {desktopLinks()}

        {/* CTA Button */}
        {session?.user ? (
          <Link href="/profile">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="h-6 w-6 text-gray-700" />
              <p className="text-gray-800 text-xs md:text-lg md:font-medium">{session.user.name}</p>
            </div>
          </Link>
        ) : (
          <div className="hidden md:block">
            <Link
              href="/register"
              className="mr-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </Link>
            <LoginButton />
          </div>
        )}

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
          <Link href="/blogs" className="block hover:text-blue-600">
            Blogs
          </Link>
          <Link href="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          {session?.user.role === "admin" && (
            <Link href="/add-course" className="hover:text-blue-600">
              Add Course
            </Link>
          )}
          {session?.user && (
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          )}

          <Link
            href="/register"
            className="inline-block w-full text-center mt-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </Link>
          {!session?.user && <LoginButton />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
