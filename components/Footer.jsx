import React from "react";

const Footer = () => {
  return (
    <section className="bg-blue-600 text-white py-16 font-Quicksand">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Join eTalks Today</h2>
        <p className="text-xl mb-8">
          Start your journey with the best talks from experts around the world.
        </p>
        <a
          href="#signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default Footer;
