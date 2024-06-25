"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Google from "@/public/Google.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import useSignup from "@/hooks/useSignup";
import Link from "next/link";

import { signIn } from "next-auth/react";

const Page = () => {
  const { signupUser } = useSignup();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setCpassword(confirmPasswordValue);
    setIsPasswordMatch(confirmPasswordValue === password);
  };

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
    if (cPassword !== password) {
      toast.error("Passwords do not match");
      return;
    }

    const loadingToast = toast.loading("Creating User...");
    try {
      await signupUser(name, email, password);
      toast.dismiss(loadingToast);
      toast.success("User created successfully, Please login to continue");

      setEmail("");
      setName("");
      setPassword("");
      setCpassword("");
    } catch (error) {
      toast.dismiss(loadingToast);
      if (error.message === "Request failed with status code 409") {
        toast.error("Email already exists");
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 font-Jost">
        <Toaster
          position="top-center"
          toastOptions={{
            loading: { duration: 4000 },
            success: { duration: 4000 },
          }}
        />
        <div className="container px-5 py-24 mx-auto font-Quicksand">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Create Account
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We value open and honest communication, embracing diverse
              perspectives in a supportive environment where every voice
              matters.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
            <div className="-m-2">
              <div className="p-2 mx-auto md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 mx-auto md:w-1/2 w-full">
                <label className="leading-7 text-base text-gray-600">
                  Password
                </label>
                <div className="relative w-full flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="border ml-4 rounded border-gray-300 bg-gray-100"
                  >
                    {showPassword ? (
                      <LuEye className="text-4xl my-auto p-1" />
                    ) : (
                      <LuEyeOff className="text-4xl my-auto p-1" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-2 mx-auto md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={cPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm Password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mx-auto p-2">
                <span
                  className={`text-center text-red-500 ${
                    !isPasswordMatch ? "" : "hidden"
                  }`}
                >
                  Passwords do not match
                </span>
              </div>
              <div className="w-full md:w-1/2 mx-auto p-2">
                Already have an account ?
                <Link
                  href="/user/login"
                  className="w-full md:w-1/2 mx-auto text-center p-2  text-blue-600 underline underline-offset-2"
                >
                  Login here
                </Link>
              </div>
              <div
                onClick={handleSubmit}
                className="w-full mt-6 md:w-1/2 mx-auto p-2"
              >
                <button className="flex w-full justify-center rounded-full mx-auto text-white bg-black border-0 py-2 focus:outline-none hover:scale-105 transition-all text-lg">
                  Create
                </button>
              </div>
            </div>
            <div className="text-center font-Jost my-2">
              <span className="text-gray-400">
                -------------------------------------
              </span>
              <span className="font-base text-gray-500 mx-2">OR</span>
              <span className="text-gray-400">
                -------------------------------------
              </span>
            </div>
            <div className="p-2 w-full mb-6 md:w-1/2 mx-auto">
              <button
                title="Signup using Google"
                onClick={() => {
                  signIn("google");
                }}
                className="flex justify-center rounded-full mx-auto text-white bg-gray-200 border-0 py-1 w-full focus:outline-none hover:scale-105 transition-all text-lg"
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
      {/* <Footer /> */}
    </>
  );
};

export default Page;
