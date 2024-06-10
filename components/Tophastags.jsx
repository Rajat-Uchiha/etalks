import React from "react";

const Tophastags = () => {
  return (
    <section className=" font-Quicksand  w-full  py-10    ">
      <h3 className="text-3xl text-center font-semibold">
        Top Hashtags of this Week
      </h3>
      <section className="text-black body-font">
        <div className="py-10">
          <ul className="list-none list-inside">
            <li className="mb-6 border border-black w-full px-8 py-4 rounded-xl hover:bg-black hover:text-white relative transition-all duration-150 font-medium cursor-pointer">
              #study
              <span className=" absolute bg-black text-white right-0 text-base font-normal rounded-full px-3 py-1 -top-2">
                5K
              </span>
            </li>
            <li className="mb-6 border border-black w-full px-8 py-4 rounded-xl hover:bg-black hover:text-white relative transition-all duration-150 font-medium cursor-pointer">
              #technology
              <span className=" absolute bg-black text-white right-0 text-base font-normal rounded-full px-3 py-1 -top-2">
                5K
              </span>
            </li>
            <li className="mb-6 border border-black w-full px-8 py-4 rounded-xl hover:bg-black hover:text-white relative transition-all duration-150 font-medium cursor-pointer">
              #collagelife
              <span className=" absolute bg-black text-white right-0 text-base font-normal rounded-full px-3 py-1 -top-2">
                5K
              </span>
            </li>
            <li className="mb-6 border border-black w-full px-8 py-4 rounded-xl hover:bg-black hover:text-white relative transition-all duration-150 font-medium cursor-pointer">
              #ipl2024
              <span className=" absolute bg-black text-white right-0 text-base font-normal rounded-full px-3 py-1 -top-2">
                5K
              </span>
            </li>
            <li className="mb-6 border border-black w-full px-8 py-4 rounded-xl hover:bg-black hover:text-white relative transition-all duration-150 font-medium cursor-pointer">
              #lifelessons
              <span className=" absolute bg-black text-white right-0 text-base font-normal rounded-full px-3 py-1 -top-2">
                5K
              </span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Tophastags;
