import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const LoginPayload = {
        email: username,
        password,
      };
      console.log("🚀 ~ handleSubmit ~ LoginPayload:", LoginPayload);

      const LoggedInUser = await fetch(`${process.env.BACKEND_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginPayload),
      });

      if (LoggedInUser.status === 200) {
        console.log("LoggedIn successfuly");
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          // Redirect to the login route
          navigate("/");
        }, 3000);
      } else {
        console.error("LoggedIn failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle error, show a message to the user, etc.
    }
    // Handle form submission here, e.g., send login credentials to your backend
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        className="bg-white p-8 rounded-md shadow-md max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
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
        <div className="mb-6">
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-3 focus:ring-blue-300"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <p className="text-sm text-blue-600 hover:underline">
            <Link to={"/user/forgot"}>Forgot password?</Link>
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      </form>
      {showSuccessPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-md shadow-md max-w-md">
            <p className="text-green-500">Logged In successfully!</p>
            <p>You can Have access to the home page</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
