"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Google from "@/public/Google.png";
import register from "@/public/register.svg";
import toast, { Toaster } from "react-hot-toast";
import useSignup from "@/hooks/useSignup";
import Footer from "@/components/Footer";

import { signIn } from "next-auth/react";

const Page = () => {
  const { signupUser } = useSignup();

  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
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
    if (!fname) {
      toast.error("First name is required");
      return;
    }
    if (!lname) {
      toast.error("Last name is required");
      return;
    }
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
      await signupUser(fname, lname, email, password);
      toast.dismiss(loadingToast);
      toast.success("User created successfully, Please login to continue");

      setEmail("");
      setFName("");
      setLName("");
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
      <Toaster />
      <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-Quicksand lg:w-11/12 xl:w-4/5 lg:mx-auto ">
        <div className=" w-full  lg:w-1/2 lg:flex lg:items-center lg:justify-center">
          <div className="max-w-md w-full bg-white rounded-lg border-2 p-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
              Create an Account
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={fname}
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="John"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lname}
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Doe"
                />
              </div>
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  onChange={handleConfirmPasswordChange}
                  name="confirmPassword"
                  value={cPassword}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-x-4 my-4">
                <input
                  checked={showPassword}
                  onChange={() => {
                    setShowPassword(!showPassword);
                  }}
                  type="checkbox"
                />
                <label htmlFor="showPassword">Show Password</label>
              </div>
              {!isPasswordMatch && cPassword !== "" && password !== "" && (
                <p className="text-red-500 mb-4"> Passwords do not match </p>
              )}

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">or</p>
              <div className="tooltip w-full" data-tip="Signup with Google">
                <button
                  onClick={signIn}
                  className="w-full bg-gray-200 text-white py-2 rounded-md hover:bg-black  focus:outline-none focus:ring-2 focus:ring-red-500 mt-4 "
                >
                  <Image className="w-8 mx-auto" src={Google}></Image>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 mx-auto lg:block hidden ">
          <Image
            className="scale-150"
            src={register}
            alt="registeration-icon"
          ></Image>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
