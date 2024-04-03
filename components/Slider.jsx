"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineQuestionAnswer } from "react-icons/md";
const Slider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
    >
      <section className="w-4/5 mx-auto flex gap-4 font-Jost">
        <div className="w-1/2">
          <button className="px-10 flex items-center border-b-2 w-full text-start hover:border-b-8 py-4 transition-all border-black text-xl">
            <RiArticleLine className="mr-4" />
            Top Articles
          </button>
        </div>
        <div className="w-1/2">
          <button className="px-10 flex items-center border-b-2 w-full text-start hover:border-b-8 py-4 transition-all border-black text-xl">
            <MdOutlineQuestionAnswer className="mr-4" /> Top Talks
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Slider;
