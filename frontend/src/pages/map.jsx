import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import LocationFinder from "./locationFinder";
const MapComponent = () => {
  const [coordinates, setCoordinates] = useState({ lat: 28.494047477085687116, lng: 77.0856871 });
  const zoom = 13; // Initial zoom level

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoordinates({ ...coordinates, [name]: parseFloat(value) });
  };

  // Custom component to update map center dynamically
  const RecenterMap = ({ lat, lng }) => {
    const map = useMap();
    map.setView([lat, lng]);
    return null;
  };

  return (
    <>
      {/* Input Form */}
      <div className="m-2">
        <h1 className="font-semibold">Location</h1>

        <LocationFinder/>

        <form>
          <input
            type="number"
            id="lng"
            name="lng"
            value={coordinates.lng}
            onChange={handleInputChange}
            className="shadow-sm mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-900 block w-full p-2.5"
            placeholder="Longitude"
            required
          />
          <input
            type="number"
            id="lat"
            name="lat"
            value={coordinates.lat}
            onChange={handleInputChange}
            className="shadow-sm mt-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-900 block w-full p-2.5"
            placeholder="Latitude"
            required
          />
        </form>
      </div>

      {/* Map Container */}
      <div className="h-96 w-full">
        <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={zoom} style={{ height: "100%", width: "100%" }}>
          {/* Update map center dynamically */}
          <RecenterMap lat={coordinates.lat} lng={coordinates.lng} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coordinates.lat, coordinates.lng]}>
            <Popup>
              Current Location: <br /> Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
