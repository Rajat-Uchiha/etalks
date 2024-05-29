import React from "react";
import Tophastags from "./Tophastags";
const Topcontributors = () => {
  return (
    <section className=" font-Quicksand  w-full sticky py-10 top-0  my-10">
      <h3 className="font- text-3xl text-center">
        Top Contributors of this Week
      </h3>
      <section className="text-gray-600 body-font    ">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Henry Letham
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p className="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    John Doe
                  </h2>
                  <p className="text-gray-500">DevOps</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p className="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Alper Kamu
                  </h2>
                  <p className="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Rodrigo Monchi
                  </h2>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tophastags />
    </section>
  );
};

export default Topcontributors;
