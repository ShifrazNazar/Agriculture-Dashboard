import React from "react";
import Navbar from "./Navbar";
import BgVideo from "../Assets/HomeBgVideo.mp4";
import Footer from "./Footer";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <video
          className="h-[60vh] w-screen object-fill blur-sm"
          autoPlay
          loop
          muted
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bottom-10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-8 text-5xl font-bold text-white">
              Producing Along With Nature
            </h1>
            <h2 className="text-3xl font-bold text-white">
              Agriculture Big Data from Global Market
            </h2>
            {/* seach button */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <input
                  type="text"
                  className="w-96 rounded-full bg-white px-5 py-3 pl-8 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Search"
                />
                <div className="absolute left-2 top-3">
                  <SearchIcon className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
