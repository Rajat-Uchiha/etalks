"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Topcontributors from "./Topcontributors";
import { MdOutlineQuestionAnswer } from "react-icons/md";
// import Articlecard from "./Articlecard";
import Questioncard from "./Questioncard";

const Slider = () => {
  // const [articles, setArticles] = useState([
  //   {
  //     id: 1,
  //     title: "Hello world this the best thing is the world",
  //     snippet:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
  //   },
  //   {
  //     id: 2,
  //     title: "Hello world this the best thing is the world",
  //     snippet:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
  //   },
  //   {
  //     id: 3,
  //     title: "Hello world this the best thing is the world",
  //     snippet:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
  //   },
  //   {
  //     id: 4,
  //     title: "Hello world this the best thing is the world",
  //     snippet:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
  //   },
  //   {
  //     id: 5,
  //     title: "Hello world this the best thing is the world",
  //     snippet:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
  //   },
  //   {
  //     id: 6,
  //     title: "Hello world this the best thing is the world",
  //     snippet:
  //       "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
  //   },
  // ]);
  const [talks, setTalks] = useState([
    {
      id: 1,
      Question:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quidem excepturi nisi expedita laudantium laboriosam quisquam nulla nobis ullam molestiae.",

      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 2,
      Question: "Which is best to pick? Next.js or React.js",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 3,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 4,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 5,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 6,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 7,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 8,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 9,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 10,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
  ]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
      >
        <section className="w-4/5 mx-auto flex gap-4 font-Jost">
          <div className="w-1/2">
            <button className="px-10 flex items-center border-b-2 w-full text-start hover:border-b-8 py-4 transition-all border-black text-xl">
              <MdOutlineQuestionAnswer className="mr-4" /> Top Talks
            </button>
          </div>
        </section>
      </motion.div>

      <section className="w-4/5 mx-auto my-20 grid grid-cols-2  gap-10  ">
        <div className="w-full  space-y-4  ">
          {talks.map((item) => {
            return (
              <Questioncard
                key={item.id}
                id={item.id}
                Question={item.Question}
                Answer={item.Answer}
              />
            );
          })}
        </div>
        <div className="w-full space-y-4 relative ">
          <Topcontributors />
        </div>
      </section>
    </>
  );
};

export default Slider;
