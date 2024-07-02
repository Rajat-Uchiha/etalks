import React from "react";
import Navbar from "@/components/Navbar";
import Feedcard from "@/components/Feedcard";
const Page = () => {
  const posts = [
    {
      id: 1,
      userImage: "https://via.placeholder.com/50",
      userName: "John Doe",
      userTitle: "Software Engineer at Company",
      postContent: "Just finished a great project!",
      postImage: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      userImage: "https://via.placeholder.com/50",
      userName: "Jane Smith",
      userTitle: "Product Manager at Another Company",
      postContent: "Excited to announce our new product!",
      postImage: "",
    },
    {
      id: 3,
      userImage: "https://via.placeholder.com/50",
      userName: "Wandy Smith",
      userTitle: "Software Engineer at Another Company",
      postContent: "Excited to announce our new product!",
      postImage: "",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-2xl mx-auto">
          {posts.map((item) => {
            return <Feedcard key={item.id} post={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
