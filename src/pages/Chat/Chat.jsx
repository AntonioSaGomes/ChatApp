import React from "react";
import ChatContainer from "./ChatContainer/ChatContainer";
import ChatRooms from "./ChatRooms/ChatRooms";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Chat() {
  return (
    <>
      <Routes>
        <Route exact path=":chatRoomId" element={<ChatContainer />} />
        <Route exact path="/" element={<ChatRooms />} />
      </Routes>
    </>
  );
}
