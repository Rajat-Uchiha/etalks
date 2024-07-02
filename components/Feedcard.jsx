import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
const Feedcard = ({ post }) => {
  return (
    <div key={post.id} className="bg-white p-6 mb-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={post.userImage}
          alt={post.userName}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{post.userName}</h2>
          <p className="text-gray-600 font-medium">{post.userTitle}</p>
        </div>
      </div>
      <p className="mb-4 text-gray-600 font-medium">
        #coding #programming #studying
      </p>
      <p className="mb-4 text-gray-600 font-medium">{post.postContent}</p>

      <div className="flex justify-between text-gray-600 border-t pt-2">
        <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200 group">
          <AiOutlineLike className="text-xl group-hover:fill-blue-600 " />
          <BiSolidLike className="text-xl group-hover:fill-blue-600 " />
          <span className="text-base font-bold text-stone-500">Like</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
          <span className="text-base font-bold text-stone-500">Answers</span>
        </button>
      </div>
    </div>
  );
};

export default Feedcard;
