import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font font-Quicksand bg-neutral-100 min-h-screen  ">
        <div className="container px-5 py-16 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto border bg-white  ">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 ">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 ">
                  <Image
                    className="rounded-full"
                    width="100"
                    height="100"
                    src="https://ui-avatars.com/api/?name=Rajat+Kalotra"
                  ></Image>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Rajat Kalotra
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Software Developer</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
                <p className="leading-relaxed text-lg mb-4 px-10">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-4/6 mx-auto my-10">
            <div className="w-full ">
              <ul className="w-full flex border-r justify-evenly  bg-white  ">
                <li className=" hover:bg-black  hover:text-white hover:cursor-pointer py-6 text-lg  w-full text-center  hover:font-semibold transition-all border-r">
                  My Talks
                </li>
                <li className=" hover:bg-black  hover:text-white hover:cursor-pointer py-6 text-lg  w-full text-center  hover:font-semibold transition-all border-r">
                  My Answers
                </li>
                <li className=" hover:bg-black hover:text-white hover:cursor-pointer  py-6 text-lg  w-full text-center  hover:font-semibold transition-all border-r">
                  Liked Talks
                </li>
                <li className=" hover:bg-black hover:text-white hover:cursor-pointer  py-6  text-lg w-full text-center hover:font-semibold  transition-all border-r ">
                  Liked Answers
                </li>
                <li className=" hover:bg-black hover:text-white hover:cursor-pointer  py-6  text-lg w-full text-center hover:font-semibold  transition-all border-r">
                  Talk +
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
