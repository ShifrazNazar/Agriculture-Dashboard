import React from "react";
import Navbar from "./Navbar";
import BgVideo from "../Assets/HomeBgVideo.mp4";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <video className="w-screen blur-sm h-[60vh] object-fill" autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-10 inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-8">
              Producing Along With Nature
            </h1>
            <h2 className="text-3xl font-bold text-white">Agriculture Big Data from Global Market</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
