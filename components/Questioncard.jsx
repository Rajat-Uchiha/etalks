"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";

const Questioncard = (props) => {
  return (
    <div
      title={props.Question}
      className="w-full font-Quicksand rounded-xl px-10 py-5 flex items-center font-medium  relative border border-black"
    >
      <div className=" w-[15%]">
        <h1 className="text-6xl font-semibold">{props.id}</h1>
      </div>
      <div className=" w-full">
        <div className="py-2  mb-2 flex items-center justify-between ">
          <h2 className="question-title text-xl">{props.Question}</h2>
        </div>
        <div>
          <button className="flex text-base justify-center items-center hover:underline hover:underline-offset-2 transition-all">
            Read Answers
            <span className="border-2 border-black rounded-full bg-black mx-2">
              <MdKeyboardArrowRight className="invert" />
            </span>
          </button>
        </div>
        <div>
          <p>#university #study</p>
        </div>
      </div>
      <button className="flex justify-start bg-black text-white items-center  space-x-2 my-2 absolute border rounded-full py-1 px-2 top-0 -right-5  ">
        <IoMdArrowUp className=" scale-110 " />
        <span className="text-base ">5K</span>
      </button>
      <div className="flex justify-start items-center  space-x-2 my-2 absolute border rounded-full py-1 px-2 bottom-0 -right-5 bg-black text-white">
        <span className="text-base ">1 month ago</span>
      </div>
    </div>
  );
};

export default Questioncard;
