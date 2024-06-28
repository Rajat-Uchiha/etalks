"use client";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleAuthMode = (mode) => {
    setShowLogin(mode === "login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-Quicksand">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          eTalks
        </h1>
        <p className="text-gray-700 text-center mb-6 font-medium">
          Welcome to eTalks. Please login or sign up to continue.
        </p>
        <div className="flex justify-center mb-6 font-medium">
          <button
            onClick={() => toggleAuthMode("login")}
            className={`px-4 py-2  rounded-l duration-200 ${
              showLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => toggleAuthMode("signup")}
            className={`px-4 py-2 rounded-r duration-200 ${
              !showLogin
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Signup
          </button>
        </div>
        {showLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Auth;
