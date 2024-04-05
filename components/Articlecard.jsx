import React from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
const Articlecard = (props) => {
  return (
    <div className="w-full  font-Jost space-y-4 mb-10  ">
      <div className=" w-1/4 ">
        <h6 className="text-gray-500 bg-gray-100 text-center rounded-full py-2">
          5 min read
        </h6>
      </div>

      <div className="my-4 ">
        <h2 className="text-3xl font-semibold">{props.title}</h2>
      </div>

      <div className="my-2">
        <Image
          src="https://images.unsplash.com/photo-1710453650585-05d2f4b966c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="my-2">
        <p className="text-lg">{props.snippet}</p>
      </div>
      <div>
        <button className="flex justify-center items-center font-semibold hover:underline hover:underline-offset-2 transition-all">
          Read Article
          <span className="border-2 border-black rounded-full bg-black p-2 mx-4">
            <MdKeyboardArrowRight className="invert" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Articlecard;
