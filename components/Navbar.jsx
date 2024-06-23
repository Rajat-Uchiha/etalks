"use client";
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-cyan-600 font-Quicksand  shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-white">
                <span className="font-bold text-xl">eTalks</span>
              </Link>
            </div>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#features"
              className="py-2 px-4 font-semibold  text-white hover:underline hover:underline-offset-4 duration-200"
            >
              Login
            </a>

            <a
              href="#signup"
              className="py-2 px-4 hover:bg-black font-semibold rounded-full bg-white text-cyan-600 hover:text-white duration-200"
            >
              Sign up
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "block" : "hidden"} md:hidden`}>
        <a
          href="#features"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Features
        </a>
        <a
          href="#testimonials"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Testimonials
        </a>
        <a href="#signup" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
