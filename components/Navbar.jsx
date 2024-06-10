"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="py-4 border-b border-black  ">
        <nav className="font-Quicksand w-4/5 mx-auto  flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="text-2xl font-medium underline-offset-2 hover:underline hover:underline-offset-2 transition-all"
            >
              eTalks
            </Link>
          </div>
          <div className=" w-3/5">
            <input
              className="border border-black  w-full rounded-xl p-3 h-full text-lg font-normal outline-none placeholder:text-black"
              placeholder="Search Talks..."
              type="text"
            />
          </div>
          <div className="space-x-4">
            <Link
              href="/user/login"
              className="rounded-full px-4 py-3 text-xl font-base hover:underline hover:underline-offset-4 transition-all duration-1000"
            >
              Login
            </Link>
            <Link
              href="/user/signup"
              className=" bg-black text-white rounded-xl px-4 py-3 text-xl font-medium border border-black"
            >
              Signup
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
