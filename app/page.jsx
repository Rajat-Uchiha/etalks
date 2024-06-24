import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tophashtags from "@/components/Tophashtags";
import Toptalks from "@/components/Toptalks";
import Topcontributors from "@/components/Topcontributors";
import Footer from "@/components/Footer";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-white font-Quicksand">
        <Navbar />
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
