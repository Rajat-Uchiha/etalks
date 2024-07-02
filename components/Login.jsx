"use client";
import React, { useState } from "react";
import Image from "next/image";
import Google from "@/public/Google.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import preloader from "@/public/preloader.gif";
import { signIn } from "next-auth/react";
const Login = () => {
  // ! HOOKS
  const router = useRouter();

  //! COMPONENT STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  //! VALIDATE EMAIL FORMAT
  const validateEmail = (email) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailFormat.test(email);
  };

  //! HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
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
      const res = await axios.post("/api/users/login", { email, password });
      if (res) {
        toast.dismiss(loadingToast);
        toast.success("User logged in successfully");
        setEmail("");
        setPassword("");
        setShowLoader(true);
        window.localStorage.setItem(
          "access_token",
          Cookies.get("access_token")
        );
        setTimeout(() => {
          router.push("/user/profile");
        }, 4000); // Show loader for 4 seconds before redirecting to dashboard
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Username or Password is wrong");
    }
  };
  return (
    <>
      <Toaster />
      <form>
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            value={email}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            value={password}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded font-medium"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-gray-700 font-medium"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Forgot password?
          </a>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <div className="mt-6 text-center w-full  ">
          <p className="text-gray-600">or</p>
          <div className="tooltip w-full mt-4 " data-tip="Login with Google">
            <button
              onClick={signIn}
              className="w-full bg-gray-200 text-white py-1 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Image
                className="w-10 mx-auto"
                src={Google}
                alt="google-icon"
              ></Image>
            </button>
          </div>
        </div>
      </form>
      {showLoader && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center ">
          <Image src={preloader} alt="society-icon" className="w-[180px]" />
          <br />
          <h3 className=" animate-pulse text-base md:text-xl xl:text-2xl font-semibold text-blue-700 tracking-wider font-Poppins">
            Coming up...
          </h3>
        </div>
      )}
    </>
  );
};
export default Login;
