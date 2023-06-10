import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";


const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [businessRegNo, setBusinessRegNo] = useState("");
  const [address, setAddress] = useState("");
  

  const onGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Signed in
        const user = result.user;
        const userDetails = {
          username: user.displayName,
          businessRegNo: "",
          address: "",
          uid: user.uid,
          photoURL: user.photoURL,

        };

        // Save the user details to Firestore
        saveUserDetailsToFirestore(userDetails);

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
        const userDetails = {
          username,
          businessRegNo,
          address,
          uid: user.uid,
        };

        // Save the user details to Firestore
        saveUserDetailsToFirestore(userDetails);

        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const saveUserDetailsToFirestore = async (userDetails) => {
    try {
      await setDoc(doc(firestore, "users", userDetails.uid), userDetails);
      console.log("User details saved with ID: ", userDetails.uid);
    } catch (error) {
      console.error("Error saving user details: ", error);
    }
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
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              label="Business Registration Number"
              value={businessRegNo}
              onChange={(e) => setBusinessRegNo(e.target.value)}
              placeholder="Enter your business registration number (optional)"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address (optional)"
              className="mt-1 block w-full rounded-md border-transparent bg-gray-200 px-4 py-3 text-gray-700 focus:border-gray-300 focus:bg-gray-300 focus:ring-0"
            />
          </div>
          <div className="mt-4">
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

        <p className=" mt-8 text-center w-full rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
          <NavLink to="/phone-signup">
          Sign in with phone
          </NavLink>
        </p>



      </div>
    </div>
  );
};

export default Signup;
