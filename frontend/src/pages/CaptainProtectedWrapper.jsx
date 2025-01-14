import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("captainToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]); // Dependencies ensure proper behavior

  return token ? <>{children}</> : null; // Render children only if token exists
};

export default UserProtectWrapper;
