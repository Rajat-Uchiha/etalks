"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Google from "@/public/Google.png";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import login from "@/public/login.jpg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Cookies from "js-cookie";
const page = () => {
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
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-Quicksand lg:w-11/12 xl:w-4/5 lg:mx-auto ">
        <div className="w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center relative">
          <div className="max-w-md w-full bg-white/95 rounded-lg border-2 p-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
              Login to Your Account
            </h2>
            <form method="post">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-800 text-sm"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">or</p>
              <div className="tooltip w-full" data-tip="Login with Google">
                <button className="w-full bg-gray-200 text-white py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-500 mt-4">
                  <Image
                    className="w-8 mx-auto"
                    src={Google}
                    alt="Google logo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 mx-auto lg:block hidden">
          <Image className="scale-150" src={login} alt="registration-icon" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
