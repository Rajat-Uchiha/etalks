"use client";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="py-4 ">
        <nav className="font-Jost w-4/5 mx-auto  flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-black underline uppercase underline-offset-2">
              etalks
            </h2>
          </div>
          <div className=" w-3/5">
            <input
              className="border  w-full rounded-full p-3 h-full text-lg font-normal outline-none"
              placeholder="Search Article..."
              type="text"
            />
          </div>
          <div className="space-x-4">
            <button className="rounded-full px-4 py-3 text-xl font-base hover:underline hover:underline-offset-4">
              Login
            </button>
            <button className=" bg-black text-white rounded-full px-4 py-3 text-xl font-base">
              Signup
            </button>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
