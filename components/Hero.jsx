"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" w-4/5 mx-auto  font-Quicksand flex py-24 space-x-40 border-black ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 }}
      >
        <h1 className=" xl:text-8xl 2xl:text-9xl font-bold xl:leading-normal 2xl:leading-normal">
          Top{" "}
          <span className="bg-black text-white rounded-xl border border-black px-2">
            {" "}
            Talks
          </span>{" "}
          of the{" "}
          <span className="bg-black text-white rounded-xl border border-black px-2">
            {" "}
            Week
          </span>
        </h1>
      </motion.div>

      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1 }}
          className=" flex justify-center items-end "
        >
          <p className=" xl:text-2xl 2xl:text-3xl my-6 font-medium leading-normal">
            Dive into the art of sharing. <br /> Share knowledge, experiences
            and doubts.
            <br />
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1 }}
          className=" flex justify-start items-center text-2xl font-medium"
        >
          Your Words, your Space, your Impact.
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
