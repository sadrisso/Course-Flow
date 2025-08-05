"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EduTrack
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <a href="#features" className="hover:text-blue-600">Features</a>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Blogs</a>
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
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-gray-700">
          <a href="#features" className="block hover:text-blue-600">Features</a>
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
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
