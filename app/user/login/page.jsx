"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Google from "@/public/Google.png";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Cookies from "js-cookie";
const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (email) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailFormat.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Email cannot be validated");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must have at least 8 characters");
      return;
    }

    const loadingToast = toast.loading("Checking credentials...");
    try {
      await axios.post("/api/users/login", { email, password });
      toast.dismiss(loadingToast);
      toast.success("User logged in successfully");
      setEmail("");
      setPassword("");
      window.localStorage.setItem("access_token", Cookies.get("access_token"));
      router.push("/user/profile");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Username or Password is wrong");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <section className="text-gray-600 font-Jost  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Login Account
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We welcome and value your unfiltered thoughts and ideas as we
              strive to create an open and inclusive environment.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 w-full mx-auto ">
            <div className=" -m-2">
              <div className="p-2 mx-auto md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-base text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 mx-auto md:w-1/2 w-full ">
                <label className="leading-7 text-base text-gray-600">
                  Password
                </label>
                <div className="relative w-full  flex items-center ">
                  <input
                    id="password"
                    value={password}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="border ml-4 rounded border-gray-300 bg-gray-100 "
                  >
                    {showPassword ? (
                      <LuEye className="text-4xl my-auto p-1" />
                    ) : (
                      <LuEyeOff className="text-4xl my-auto p-1" />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-2 mx-auto md:w-1/2 w-full flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4"
                  ></input>
                  <label className="leading-7 text-base text-gray-600">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link href="/" className="text-red-500">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className=" w-full mt-6 md:w-1/2 mx-auto p-2">
                <button
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-full mx-auto text-white bg-black border-0 py-2 focus:outline-none hover:scale-105 transition-all text-lg"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="text-center font-Jost my-2 ">
              <span className=" text-gray-400 ">
                -------------------------------------
              </span>
              <span className="font-base text-gray-500 mx-2">OR</span>
              <span className=" text-gray-400 ">
                -------------------------------------
              </span>
            </div>
            <div className="p-2 w-full mb-6 md:w-1/2 mx-auto ">
              <button
                onClick={() => {
                  signIn("google");
                }}
                title="Login using Google"
                className="flex justify-center  rounded-full mx-auto text-white bg-gray-100 border-0 py-1 w-full focus:outline-none hover:scale-105 transition-all text-lg "
              >
                <Image
                  className="w-10 mx-auto"
                  alt="Google-icon"
                  src={Google}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
