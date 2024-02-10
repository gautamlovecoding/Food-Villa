import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import dotenv from "dotenv";
dotenv.config();

console.log(process.env.BACKEND_URL);

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const SignupPayload = {
        userName: username,
        email,
        password,
        firstName: firstname,
        lastName: lastname,
        address,
      };
      console.log("🚀 ~ handleSubmit ~ SignupPayload:", SignupPayload);

      const signUpUser = await fetch(`${process.env.BACKEND_URL}user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignupPayload),
      });

      if (signUpUser.status === 201) {
        console.log("Signup successful");
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          // Redirect to the login route
          navigate("/user/login");
        }, 3000);
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        {showSuccessPopup && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-8 rounded-md shadow-md max-w-md">
              <p className="text-green-500">Signed up successfully!</p>
              <p>You can now login from the login page.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
