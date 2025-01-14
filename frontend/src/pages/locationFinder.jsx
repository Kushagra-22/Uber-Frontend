import React, { useState } from "react";
import axios from "axios";

const LocationFinder = () => {
  const [coordinates, setCoordinates] = useState({ lat: "40.748817", lon: "-73.985428" });
  const [locationName, setLocationName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoordinates({ ...coordinates, [name]: value });
  };

  const getLocationName = async () => {
    const { lat, lon } = coordinates;

    if (!lat || !lon) {
      alert("Please enter valid latitude and longitude!");
      return;
    }

    try {
      const response = await axios.get(
        // `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = response.data;

      if (data && data.display_name) {
        setLocationName(data.display_name);
      } else {
        setLocationName("Location name not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      setLocationName("Error fetching location name");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Find Location Name</h1>
      <div className="mb-4">
        <input
          type="number"
          name="lat"
          value={coordinates.lat}
          onChange={handleInputChange}
          placeholder="Latitude"
          className="p-2 border rounded mr-2"
        />
        <input
          type="number"
          name="lon"
          value={coordinates.lon}
          onChange={handleInputChange}
          placeholder="Longitude"
          className="p-2 border rounded"
        />
      </div>
      <button
        onClick={getLocationName}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Get Location Name
      </button>
      {locationName && (
        <div className="mt-4">
          <h2 className="font-semibold">Location Name:</h2>
          <p>{locationName}</p>
        </div>
      )}
    </div>
  );
};

export default LocationFinder;
