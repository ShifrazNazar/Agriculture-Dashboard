import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="mb-8 text-4xl font-bold text-gray-700">
          Welcome to Our Agricultural Company
        </h1>
        <p className="mb-8 text-lg  text-gray-700">
          We are dedicated to providing valuable information and services based
          on research papers in the field of agriculture.
        </p>
        <button className="rounded bg-gray-300 px-6  py-3 text-lg font-semibold text-gray-700 shadow hover:bg-gray-400">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
