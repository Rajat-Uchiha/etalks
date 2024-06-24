import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const user = {
  fullName: "Rajat Kalotra",
  userImage: "https://ui-avatars.com/api/?name=Rajat+Kalotra",
  bio: "A passionate speaker and technology enthusiast. Loves to share knowledge and inspire others. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum nesciunt a ratione, esse sunt vitae illum dolorem magnam ab",
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/johndoe" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    { platform: "GitHub", url: "https://github.com/johndoe" },
  ],
  profession: "Software Engineer",
  addedTalks: [
    "Talk 1: Introduction to React",
    "Talk 2: Advanced Node.js",
    "Talk 3: Advanced Node.js",
    "Talk 4: Advanced Node.js",
    "Talk 5: Advanced Node.js",
  ],
  addedAnswers: [
    "Answer 1: How to use React Hooks?",
    "Answer 2: Best practices in Node.js",
  ],
  likedTalks: [
    "Talk 3: CSS Grid Layout",
    "Talk 4: Functional Programming in JavaScript",
  ],
  likedAnswers: [
    "Answer 3: Difference between var, let and const",
    "Answer 4: How to optimize React performance?",
  ],
};

const page = ({
  fullName,
  userImage,
  bio,
  socialLinks,
  profession,
  addedTalks,
  addedAnswers,
  likedTalks,
  likedAnswers,
}) => {
  return (
    <>
      <Navbar />
      <div className="xl:w-4/6 mx-auto  rounded-lg border-2 bg-white p-8 mb-4 mt-10 font-Quicksand">
        {/* User bio and image */}
        <div className="flex items-center space-x-6">
          <img
            src={user.userImage}
            alt={user.fullName}
            className="w-20 h-20 rounded-full object-cover "
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 ">
              {user.fullName}
            </h1>
            <p className="text-lg text-teal-600 font-medium mt-2">
              {user.profession}
            </p>
            <p className="text-gray-600 font-medium mt-4">{user.bio}</p>
          </div>
        </div>

        {/* Stats and social links */}
        <div className="flex justify-between items-start">
          <div className="mt-8  ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Social Links
            </h2>
            <div className="flex space-x-6">
              {user.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-teal-600 hover:text-black font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8  ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Community Stats
            </h2>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center">
                <h6 className="text-2xl font-semibold text-teal-600">991</h6>
                <p className="font-medium text-gray-600">Views</p>
              </div>
              <div className="flex flex-col items-center">
                <h6 className="text-2xl font-semibold text-teal-600">65</h6>
                <p className="font-medium text-gray-600">Likes</p>
              </div>
              <div className="flex flex-col items-center">
                <h6 className="text-2xl font-semibold text-teal-600">991</h6>
                <p className="font-medium text-gray-600">Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Activities, talks, answers, add a new talk */}
      <div className="grid grid-cols-2 xl:w-4/6 mx-auto gap-4 mb-10">
        <div className=" mx-auto w-full bg-white rounded-lg border-2 p-8 font-Quicksand">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Submit Your Talk
          </h2>
          <p className="text-gray-600 mb-6 font-medium">
            Fill in the details below to submit your talk for consideration.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 border-2  rounded-lg focus:outline-none focus:border-teal-500 font-medium"
                placeholder="Enter the title of your talk"
                required={true}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full px-3 py-2 border-2  rounded-lg focus:outline-none focus:border-teal-500 font-medium"
                placeholder="Enter a brief description of your talk"
                rows="4"
                required={true}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:bg-teal-700 text-lg font-medium"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" bg-white rounded-lg border-2 p-8 font-Quicksand">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-2">
            {" "}
            {user.addedTalks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-md font-medium text-gray-700"
                >
                  {item}
                </li>
              );
            })}{" "}
          </ul>
        </div>
        <div className=" bg-white rounded-lg border-2 p-8 font-Quicksand">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">My Talks</h2>
          <ul className="space-y-2">
            {" "}
            {user.addedTalks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-md font-medium text-gray-700"
                >
                  {item}
                </li>
              );
            })}{" "}
          </ul>
        </div>
        <div className=" bg-white rounded-lg border-2 p-8 font-Quicksand">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Liked Talks</h2>
          <ul className="space-y-2">
            {" "}
            {user.addedTalks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-md font-medium text-gray-700"
                >
                  {item}
                </li>
              );
            })}{" "}
          </ul>
        </div>
        <div className=" bg-white rounded-lg border-2 p-8 font-Quicksand">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">My Answers</h2>
          <ul className="space-y-2">
            {" "}
            {user.addedTalks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-md font-medium text-gray-700"
                >
                  {item}
                </li>
              );
            })}{" "}
          </ul>
        </div>

        <div className=" bg-white rounded-lg border-2 p-8 font-Quicksand">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Liked Answers
          </h2>
          <ul className="space-y-2">
            {" "}
            {user.addedTalks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-md font-medium text-gray-700"
                >
                  {item}
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
