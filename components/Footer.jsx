import React from "react";

const Footer = () => {
  return (
    <footer className=" body-font font-Quicksand border border-black">
      <hr />
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-lg  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Etalks —
          <a className=" ml-1" rel="noopener noreferrer" target="_blank">
            @Rajat-Uchiha
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
