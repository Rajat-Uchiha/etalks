"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-4/5 mx-auto  font-Jost flex py-24 space-x-40">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 }}
      >
        <h1 className="text-9xl font-medium leading-tight">
          Top Talks of the Week
        </h1>
      </motion.div>

      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1 }}
          className=" flex justify-center items-end "
        >
          <p className="text-3xl my-6">
            Dive into the art of sharing. <br /> Share knowledge, experiences
            and doubts.
            <br />
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1 }}
          className=" flex justify-start items-center text-2xl"
        >
          Your Words, your Space, your Impact.
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
