import React from "react";

const Tophastags = () => {
  return (
    <section className=" font-Jost  w-full  py-10    ">
      <h3 className="font- text-3xl text-center">Top Hashtags of this Week</h3>
      <section className="text-gray-600 body-font">
        <div className="py-10">
          <ul className="list-none list-inside">
            <li className="mb-6 border w-full px-8 py-4 rounded-xl hover:bg-black hover:text-neutral-200 transition-all duration-150 font-medium cursor-pointer">
              #study
            </li>
            <li className="mb-6 border w-full px-8 py-4 rounded-xl hover:bg-black hover:text-neutral-200 transition-all duration-150 font-medium cursor-pointer">
              #technology
            </li>
            <li className="mb-6 border w-full px-8 py-4 rounded-xl hover:bg-black hover:text-neutral-200 transition-all duration-150 font-medium cursor-pointer">
              #collagelife
            </li>
            <li className="mb-6 border w-full px-8 py-4 rounded-xl hover:bg-black hover:text-neutral-200 transition-all duration-150 font-medium cursor-pointer">
              #ipl2024
            </li>
            <li className="mb-6 border w-full px-8 py-4 rounded-xl hover:bg-black hover:text-neutral-200 transition-all duration-150 font-medium cursor-pointer">
              #lifelessons
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Tophastags;
