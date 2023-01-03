import React from "react";
import "./MainContainer.css";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import ChatContainer from "../../pages/ChatContainer/ChatContainer";

export default function MainContainer() {
  return (
    <div className="main-container">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/chat" element={<ChatContainer />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
