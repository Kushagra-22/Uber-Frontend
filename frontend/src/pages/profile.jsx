import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "./navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MapComponent from "./map";

// gsap.registerPlugin(useGSAP);

// const container = useRef();

// useGSAP(
//   () => {
//     // gsap code here...
//     gsap.to(".box", { x: 360 }); // <-- automatically reverted
//   },
//   { scope: container }
// );

const Profile = () => {
  const token = localStorage.getItem("userToken");
  console.log(token);
  return (
    <>
      <NavBar />
      {/* <h1>Profile Page</h1> */}
      <div className="mr-14">
        {/* <div>  */}
        <MapComponent />

        {/* </div> */}
      </div>
      <div className="ml-2">
        <h4 className="mt-2 font-bold">Find a Trip!</h4>
        <form className=" flex flex-col">
          <div className="line h-16 w-1 top-24 left-3 rounded-full relative bg-black"></div>
          <input
            className="bg-gray-200 p-4 m-1 border placeholder:text-sm border-black w-fit rounded-xl"
            type="text"
            placeholder="Add a pick-up location "
          />
          <input
            className="p-4 m-1 bg-gray-200 border placeholder:text-sm border-black  w-fit rounded-xl"
            type="text"
            placeholder="Add destination"
          />
        </form>
      </div>
    </>
  );
};
export default Profile;
