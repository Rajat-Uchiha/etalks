import React from "react";

const page = () => {
  return (
    <section className="text-gray-600 body-font font-Jost">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 shadow-sm border ">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-semibold title-font mt-4 text-xl">
                  Rajat Kalotra
                </h2>
                <div className="w-12 h-1 bg-neutral-950 rounded mt-2 mb-4"></div>
                <p className="text-base font-medium">Software Developer</p>
              </div>
            </div>
            <div className="sm:w-2/3  sm:pl-8 sm:py-8 sm:border-l  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Hi, I am Rajat Kalotra working as a Software Developer Enginner
                at Techscholars.
              </p>
              <p className="text-indigo-500 inline-flex items-center">
                Since 19-May-2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
