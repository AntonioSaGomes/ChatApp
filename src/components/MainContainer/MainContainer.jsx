import React, { useEffect } from "react";
import "./MainContainer.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Chat from "../../pages/Chat/Chat";
import Settings from "../../pages/Settings/Settings";
import { getAuth } from "firebase/auth";

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
