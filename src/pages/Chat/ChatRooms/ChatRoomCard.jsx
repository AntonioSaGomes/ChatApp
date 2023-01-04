import React from "react";
import "./ChatRooms.css";
import { useNavigate } from "react-router-dom";

export default function ChatRoomCard({ chatRoom }) {
  let navigate = useNavigate();

  const goToChatRoom = (chatRoom) => {
    //TODO: associate chatRoom with ChatContainer
    console.log(chatRoom);
    navigate(`/chat/${chatRoom.name}`);
  };

  return (
    <div
      className="chat-room-card clickable"
      onClick={() => {
        goToChatRoom(chatRoom);
      }}
    >
      <img className="chat-icon" src={chatRoom.img} alt="" />
      <span className="bold">{chatRoom.name}</span>
    </div>
  );
}
