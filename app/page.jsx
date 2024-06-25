"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tophashtags from "@/components/Tophashtags";
import Toptalks from "@/components/Toptalks";
import Topcontributors from "@/components/Topcontributors";
import Footer from "@/components/Footer";

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };
  return (
    <>
      <div className="min-h-screen bg-white font-Quicksand">
        <Navbar
          onLoginClick={toggleLoginPopup}
          onSignupClick={handleSignUpClick}
        />

        <Hero />
        <Tophashtags />
        <Toptalks />
        <Topcontributors />
        <Footer />
      </div>
    </>
  );
}

export default Home;
