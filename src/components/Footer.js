import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="mb-4 w-full md:mb-0 md:w-1/4 lg:w-1/6">

            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="about" className="text-gray-500 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/dashboard" className="text-gray-500 hover:text-gray-800">
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-500 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 w-full md:mb-0 md:w-1/4 lg:w-1/6">
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Crop Management
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Soil Analysis
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Weather Monitoring
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 w-full md:mb-0 md:w-1/4 lg:w-1/6">
            <h4 className="mb-4 text-lg font-semibold">Resources</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Case Studies
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Whitepapers
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 w-full md:mb-0 md:w-1/4 lg:w-1/6">
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-gray-800">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2023 Your Agricultural Company. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-800">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
