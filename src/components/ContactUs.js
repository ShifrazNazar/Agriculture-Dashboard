import React from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-2xl py-12">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline h-32 w-full resize-none appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
