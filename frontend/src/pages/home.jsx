import React, { useState } from "react";
import NavBar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU1OTZlY2Q4NjQwZDJmMjA1YjFlMTMiLCJpYXQiOjE3MzM2NjUyMjUsImV4cCI6MTczMzc1MTYyNX0.KO0_rTGV4CuBY4qF-gn5TA_-AJ7PF7w92Hmdd0UuQ_A";
const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

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

  async function handleClick(e) {
    console.log("Profile");
    e.preventDefault();

    try {
      // Send form data to backend
      const response = await axios.get(
        "http://localhost:4000/users/profile",
        
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sending Authorization token in headers
          
          },
        }
      );

      setResponseMessage(response.data.message);
      // navigate("/");
    } catch (error) {
      console.error("Error sending form data:", error);
      setResponseMessage("Error sending form data");
    }
  }
  return (
    <div>
      <NavBar />
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-serif font-bold">Go anywhere with Uber</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the convenience of ridesharing in your city.
        </p>
      </div>
      <button onClick={handleClick}>Profile</button>
      <div className="mt-4 h-auto w-screen ">
        <img src="img1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
