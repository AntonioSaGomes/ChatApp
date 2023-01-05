import React from "react";
import "./MainContainer.css";
import { Route, Routes } from "react-router-dom";
import Chat from "../../pages/Chat/Chat";
import Settings from "../../pages/Settings/Settings";

export default function MainContainer() {
  return (
    <div className="main-container">
      <Routes>
        <Route exact path="/" element={<Chat />} />
        <Route exact path="/chat/*" element={<Chat />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
