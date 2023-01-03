import React, { useState } from "react";
import "./InputMessage.css";

export default function InputMessage({ onClickSend }) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    onClickSend(message);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickSend(message);
    }
  };
  return (
    <div className="input-message">
      <input
        className="input-message-container"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        disabled={message.trim() === ""}
        className="input-message-btn"
        onClick={sendMessage}
      >
        <img className="icon" src="/icons/send-message.svg" />
      </button>
    </div>
  );
}
