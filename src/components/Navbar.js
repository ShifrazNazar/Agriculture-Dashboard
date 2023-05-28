import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import logo from "../Assets/Agro.jpeg";

const Navbar = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const renderAuthButtons = () => {
    if (authUser && authUser.email) {
      const avatarText = authUser.email.charAt(0).toUpperCase();
      return (
        <div className="flex items-center">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
            <span className="font-bold text-white">{avatarText}</span>
          </div>
          <button
            className="ml-4 rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-700"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <button className="rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-700">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="ml-4 rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-700">
              Sign Up
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <nav>
      <div className="mx-auto border-b-2 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img className="w-24 mr-6" src={logo} alt="logo" />
            </Link>
            <Link to="/" className=" font-bold text-gray-900">
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm ml-4 text-gray-500 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/dashboard"
              className="text-sm ml-4 text-gray-500 hover:text-gray-900"
            >
              Dashboard
            </Link>
          </div>
          <div className="ml-4 flex items-center">
            <Link
              to="/contact"
              className="mr-4 text-sm text-gray-500 hover:text-gray-900"
            >
              Contact Us
            </Link>
            {renderAuthButtons()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
