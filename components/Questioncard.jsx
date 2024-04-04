"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";

const Questioncard = (props) => {
  return (
    <div
      title={props.Question}
      className="w-full text-2xl font-Jost border-b py-2 flex items-center "
    >
      <div className=" w-[10%]">
        <h1 className="text-6xl font-semibold">{props.id}</h1>
      </div>
      <div className=" w-full">
        <div className="py-2 max-h-10 overflow-hidden  ">
          <h2 className="question-title">{props.Question}</h2>
        </div>
        <div>
          <button className="flex text-base justify-center items-center hover:underline hover:underline-offset-2 transition-all">
            Read Answers
            <span className="border-2 border-black rounded-full bg-black p-1 mx-2">
              <MdKeyboardArrowRight className="invert" />
            </span>
          </button>
        </div>
        <div className="flex justify-start items-center space-x-2 my-2">
          <IoMdArrowUp /> <span className="text-sm">202</span>
        </div>
      </div>
    </div>
  );
};

export default Questioncard;
