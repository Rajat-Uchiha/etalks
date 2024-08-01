import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const Page = () => {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      avatar: "https://via.placeholder.com/150",
      image: "https://via.placeholder.com/600x400",
      caption: "Exploring the mountains!",
      likes: 34,
      comments: 5,
    },
    {
      id: 2,
      username: "jane_smith",
      avatar: "https://via.placeholder.com/150",
      image: "https://via.placeholder.com/600x400",
      caption: "Delicious meal at the new restaurant",
      likes: 58,
      comments: 12,
    },
    {
      id: 3,
      username: "jane_smith",
      avatar: "https://via.placeholder.com/150",
      image: "https://via.placeholder.com/600x400",
      caption: "Delicious meal at the new restaurant",
      likes: 58,
      comments: 12,
    },
    {
      id: 4,
      username: "jane_smith",
      avatar: "https://via.placeholder.com/150",
      image: "https://via.placeholder.com/600x400",
      caption: "Delicious meal at the new restaurant",
      likes: 58,
      comments: 12,
    },
    {
      id: 5,
      username: "jane_smith",
      avatar: "https://via.placeholder.com/150",
      image: "https://via.placeholder.com/600x400",
      caption: "Delicious meal at the new restaurant",
      likes: 58,
      comments: 12,
    },
  ];

  return (
    <section className="bg-neutral-200">
      <Navbar />
      <div className="grid grid-cols-3 mx-auto p-4  w-4/5 my-10 ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-8 bg-white rounded-lg  overflow-hidden w-96  mx-auto"
          >
            <div className="flex items-center p-4">
              <Image
                src={post.avatar}
                alt={post.username}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{post.username}</h2>
                <p className="text-sm text-gray-600">@{post.username}</p>
              </div>
            </div>
            <Image src={post.image} alt={post.caption} className="w-full" />
            <div className="p-4">
              <p className="text-sm text-gray-600">{post.caption}</p>
              <div className="flex items-center mt-4">
                <button className="flex items-center text-gray-600 hover:text-red-500 mr-4">
                  <span className="mr-2">❤️</span>
                  {post.likes} Likes
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                  <span className="mr-2">💬</span>
                  {post.comments} Comments
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
