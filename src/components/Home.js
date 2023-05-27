import React from "react";
import Navbar from "./Navbar";
import BgVideo from "../Assets/HomeBgVideo.mp4";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <video className="h-screen w-screen object-cover blur-sm" autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-10 inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8">
              Producing Along With Nature
            </h1>
            <h2 className="text-4xl font-bold text-white">Agriculture Big Data from Global Market</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
