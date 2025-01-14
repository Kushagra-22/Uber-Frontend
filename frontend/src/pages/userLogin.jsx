import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Check if the token exists in localStorage
    if (localStorage.getItem("userToken")) {
      navigate("/profile"); // Navigate to the profile page
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post(
        "http://localhost:4000/users/login",
        formData
      );
      console.log(formData);
      localStorage.setItem("userToken", response.data.token);
      setResponseMessage(response.data.message);
      navigate("/profile");
    } catch (error) {
      console.error("Error sending form data:", error);
      setResponseMessage("Error sending form data");
    }
  };

  return (
    <div className="h-screen">
      <div>
        <NavBar />
      </div>
      <div className="mt-16 flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold mb-2">
              Log in to your account.
            </h2>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email" // Ensure the name matches the key in formData
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-900 block w-full p-2.5"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-black"
          >
            Continue
          </button>

          <div className="mt-2 flex flex-row">
            <p>New here ?</p>
            <Link className="text-blue-800 ml-2" to="/signup">
              Create new Account
            </Link>
          </div>

          {/* Add Sign in as Captain button with the same style as Continue button */}
          <button
            type="button"
            className="w-full mt-16 text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-green-700"
          >
            <Link to="/captain-login" className="text-white">
              Sign in as Captain
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
