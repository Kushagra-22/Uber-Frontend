import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserLogin from "./pages/userLogin";
import UserRegister from "./pages/userRegister";
import Profile from "./pages/profile";
import UserLogout from "./pages/userLogout";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainRegister from "./pages/captainRegister";
import CaptainLogin from "./pages/captainLogin";
import CaptainLogout from "./pages/captainLogout";
import Chat from "./pages/chat";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserRegister />} />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="/captain-logout" element={<CaptainLogout />} />

        <Route path="/captain-signup" element={<CaptainRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/chat" element={<Chat />} />

        <Route
          path="/profile"
          element={
            <UserProtectedWrapper>
              <Profile />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
