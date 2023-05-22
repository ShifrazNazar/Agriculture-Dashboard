import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
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
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-8">
            <button
              onClick={onLogin}
              className="w-full rounded-md bg-gray-700 px-4 py-3 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="m-8 text-center text-sm text-gray-700">
          Don't have an account yet?{" "}
          <NavLink to="/signup" className="text-gray-700 hover:text-gray-600">
            Sign up
          </NavLink>
        </p>
        <button
          onClick={onGoogleSignIn}
          className="w-full rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        >
          Sign in with Google
        </button>
        {/* <button
          onClick={onFacebookSignIn}
          className="w-full px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Sign in with Facebook
        {/* Sign in with Facebook button */}
        {/* <button
          onClick={onFacebookSignIn}
          className="w-full px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Sign in with Facebook
        </button> */}
      </div>
    </div>
  );
};

export default Login;
