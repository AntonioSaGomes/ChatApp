import React from "react";
import "./ChatMessage.css";

export default function ChatMessage({ chatMessage }) {
  return (
    <div className="chat-message-container">
      <img
        className="chat-message-img"
        src={chatMessage.photo}
        referrerPolicy="no-referrer"
      />
      <div className="chat-message-content">{chatMessage.content}</div>
    </div>
  );
}
