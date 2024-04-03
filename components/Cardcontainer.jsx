"use client";
import React, { useState } from "react";
import Articlecard from "./Articlecard";

const Cardcontainer = () => {
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
    },
    {
      id: 2,
      Question: "Is is really possible to be happy?",
    },
    {
      id: 3,
      Question: "Is is really possible to be happy?",
    },
    {
      id: 4,
      Question: "Is is really possible to be happy?",
    },
    {
      id: 5,
      Question: "Is is really possible to be happy?",
    },
    {
      id: 6,
      Question: "Is is really possible to be happy?",
    },
  ]);
  return (
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
  );
};

export default Cardcontainer;
