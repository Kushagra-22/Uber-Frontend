import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CaptainContext from "./context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CaptainContext>
  </StrictMode>
);
