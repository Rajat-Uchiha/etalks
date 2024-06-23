import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Toptalks from "@/components/Toptalks";
import Topcontributors from "@/components/Topcontributors";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-white font-Quicksand">
        <Navbar />
        <Hero />
        <Toptalks />
        <Topcontributors />

        {/* Call to Action Section */}
        <section className="bg-cyan-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Join eTalks Today</h2>
            <p className="text-xl mb-8">
              Start your journey with the best talks from experts around the
              world.
            </p>
            <a
              href="#signup"
              className="bg-white text-cyan-600 px-6 py-3 rounded-full text-lg font-semibold"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
