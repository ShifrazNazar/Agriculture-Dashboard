import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-2xl py-12">
        <h1 className=" mb-4 text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mb-4 text-gray-700">
          We are an agriculture produce research company dedicated to advancing
          the field of crop cultivation and quality. Our team of experts is
          committed to developing high-quality produce varieties and innovative
          farming practices.
        </p>
        <p className="mb-4 text-gray-700">
          Our mission is to improve agricultural productivity and
          sustainability. We work closely with farmers, breeders, and
          researchers to create new crop varieties that are disease-resistant,
          high-yielding, and nutritionally rich.
        </p>
        <p className="text-gray-700">
          Through our cutting-edge research, we aim to revolutionize the
          agriculture industry by addressing key challenges such as climate
          change, resource conservation, and food security. We are dedicated to
          making a positive impact on the global food supply chain.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
