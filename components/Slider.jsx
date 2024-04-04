"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import Articlecard from "./Articlecard";
import Questioncard from "./Questioncard";
const Slider = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Hello world this the best thing is the world",
      snippet:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
    },
    {
      id: 2,
      title: "Hello world this the best thing is the world",
      snippet:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
    },
    {
      id: 3,
      title: "Hello world this the best thing is the world",
      snippet:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
    },
    {
      id: 4,
      title: "Hello world this the best thing is the world",
      snippet:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
    },
    {
      id: 5,
      title: "Hello world this the best thing is the world",
      snippet:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
    },
    {
      id: 6,
      title: "Hello world this the best thing is the world",
      snippet:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore fugiat, possimus odio minima nihil voluptates perferendis eligendi quia animi?",
    },
  ]);
  const [talks, setTalks] = useState([
    {
      id: 1,
      Question: "Is is really possible to be happy?",
      Answer:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore alias debitis animi dolor natus quidem maxime aperiam saepe nisi.",
    },
    {
      id: 2,
      Question: "Is is really possible to be happy?",
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
      <section className="w-4/5 mx-auto my-20 grid gap-8 grid-cols-3  ">
        {articles.map((item) => {
          return (
            <Articlecard
              key={item.id}
              title={item.title}
              snippet={item.snippet}
            />
          );
        })}
      </section>
      <section className="w-4/5 mx-auto my-20 grid gap-8 grid-cols-2  ">
        {talks.map((item) => {
          return (
            <Questioncard
              key={item.id}
              Question={item.Question}
              Answer={item.Answer}
            />
          );
        })}
      </section>
    </>
  );
};

export default Slider;
