import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Signed in
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-700">
          Welcome Back!
        </h1>
        <form>
          <div>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              onClick={onSubmit}
              className="w-full rounded-md bg-gray-700 px-4 py-3 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="m-8 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <NavLink to="/login" className="text-gray-700 hover:text-gray-600">
            Sign in
          </NavLink>
        </p>
        <button
          onClick={onGoogleSignIn}
          className="w-full rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
