import React, { useState } from "react";
import NavBar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CaptainContext, { CaptainDataContext } from "../context/CaptainContext";

const CaptainRegister = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });

  const [responseMessage, setResponseMessage] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname") {
      // Update nested fullname object
      setFormData({
        ...formData,
        fullname: {
          ...formData.fullname,
          [name]: value,
        },
      });
    } else if (["color", "plate", "capacity", "vehicleType"].includes(name)) {
      setFormData({
        ...formData,
        vehicle: {
          ...formData.vehicle,
          [name]: value,
        },
      });
    } else {
      // Update other fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend
      const response = await axios.post(
        "http://localhost:4000/captain/register",
        formData
      );
      // console.log(formData);
      localStorage.setItem('captainToken',response.data.token)
      setResponseMessage(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error sending form data:", error);
      setResponseMessage("Error sending form data");
    }
  };
  return (
    <div className="h-screen ">
      <div>
        <NavBar />
      </div>
      <div className="mt-16">
        <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
          <h2 className="text-2xl max-w-sm mx-auto">What your Name ?</h2>
          <div class=" flex mt-3 flex-row mb-5">
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.fullname.firstname}
              onChange={handleChange}
              class="shadow-sm mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-900  block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-900 dark:focus:border-stone-900 dark:shadow-sm-light"
              placeholder="Firstname"
              required
            />

            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.fullname.lastname}
              onChange={handleChange}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-900  block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-900 dark:focus:border-stone-900 dark:shadow-sm-light"
              placeholder="Lastname"
            />
          </div>
          <div class="mb-5">
            <h2 className="text-2xl mb-2">What your email?</h2>
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
          <div class="mb-5">
            <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900  dark:text-black"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <h3 className="text-lg font-medium mb-2">Vechicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              type="text"
              name="color"
              value={formData.vehicle.color}
              onChange={handleChange}
              className="w-1/2 rounded-lg px-4 py-2 border text-sm"
              placeholder="Vehicle color"
              required
            />
            <input
              type="text"
              name="plate"
              value={formData.vehicle.plate}
              onChange={handleChange}
              className="w-1/2 rounded-lg px-4 py-2 border text-sm"
              placeholder="Vehicle Plate"
              required
            />
          </div>

          <div className="flex gap-4 mb-7">
            <input
              required
              name="capacity"
              className="w-1/2 rounded-lg px-4 py-2 border text-sm "
              type="text"
              placeholder="Vehicle capacity"
              value={formData.vehicle.capacity}
              onChange={handleChange}
            />
            {/* <input
              required
              className="w-1/2 rounded-lg px-4 py-2 border text-lg "
              type="text"
              placeholder="Vehicle Type"
              value={formData.vehicle.vehicleType}
              onChange={handleChange}
            /> */}
            <select
              name="vehicleType"
              value={formData.vehicle.vehicleType}
              onChange={handleChange}
              className="w-1/2 rounded-lg px-4 py-2 border text-sm"
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the{" "}
              <a href="#" class="text-blue-600 hover:underline dark:text-black">
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-green-700 "
          >
            Create Captain account.
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaptainRegister;
