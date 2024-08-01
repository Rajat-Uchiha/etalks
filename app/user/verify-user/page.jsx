"use client";
import React, { useState } from "react";

const Page = () => {
  const [OTP, setOTP] = useState("");
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  const handleOTP = (e) => {
    const value = e.target.value;

    setOTP(value);
    {
      if (value.length === 4) {
        setIsBtnVisible(true);

        // ! make the request to verify otp
      } else {
        setIsBtnVisible(false);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100 font-Quicksand">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xs">
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
            Enter OTP
          </h2>
          <h6 className="text-base font-semibold text-center mb-6 text-gray-600">
            Please check your registered email
          </h6>
          <div className="flex justify-between">
            <input
              type="number"
              className="w-full border-2 border-gray-300 rounded py-2 px-2 outline-none font-bold text-gray-500 "
              maxLength={4}
              placeholder="4 digit OTP"
              onChange={handleOTP}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-black text-white w-full ${
                isBtnVisible ? "" : "hidden"
              } rounded-full py-2 text-lg hover:bg-green-800 `}
            >
              verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
