import EmojiPicker, { Emoji, EmojiStyle } from "emoji-picker-react";
import React, { useEffect, useState } from "react";
import "./InputMessage.css";

export default function InputMessage({ onClickSend, emojiBox }) {
  const [message, setMessage] = useState("");
  const [showEmojiBox, setShowEmojiBox] = useState(false)
  const sendMessage = () => {
    onClickSend(message);
    setMessage("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickSend(message);
      setMessage("");
    }
  };
  function handleEmojiPick(emojiData, event) {
    const emoji = emojiData.emoji;
    console.log(emojiData);
    setMessage((prev) => {
      return prev + emoji
    })
  }

  return (
    <div className="input-message">
      <input
        className="input-message-container"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyDown}
        value={message}
      />
      {emojiBox && 
        <div className="emojiWrapper clickable" onClick={() => { setShowEmojiBox(!showEmojiBox)}} >
          <Emoji unified="1f642" size="30" />
        </div>
      }
      {showEmojiBox && 
      <EmojiPicker onEmojiClick={
        handleEmojiPick
      }
      skinTonesDisabled={true}
      previewConfig={{
        showPreview: false
      }}
      height={300} 
      width={400}
       /> }
      <button
        disabled={message.trim() === ""}
        className="input-message-btn"
        onClick={sendMessage}
      >
        <img
          disabled={message.trim() === ""}
          className="icon"
          src="/icons/send-message.svg"
        />
      </button>
    </div>
  );
}
