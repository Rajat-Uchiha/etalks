import React from "react";

const Hero = () => {
  return (
    <header className="bg-cyan-600  text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to eTalks</h1>
        <p className="text-xl mb-8">
          Engaging and enlightening talks of experts as well as of beginners
        </p>
        <a
          href="#features"
          className="bg-white text-cyan-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white duration-200"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Hero;
