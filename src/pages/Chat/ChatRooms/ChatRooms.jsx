import React from "react";
import { chatRooms } from "../../../mocks/testData";
import ChatRoomCard from "./ChatRoomCard";
import "./ChatRooms.css";

export default function ChatRooms() {
  const chats = chatRooms;

  return (
    <div className="chat-room-page">
      <div className="chat-rooms-header">
        <h1>ChatRooms</h1>
      </div>
      <div className="chat-rooms-container">
        {chats.map((chatRoom) => (
          <ChatRoomCard key={chatRoom.name} chatRoom={chatRoom} />
        ))}
      </div>
    </div>
  );
}
