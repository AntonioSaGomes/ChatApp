import React from "react";
import "./ChatRooms.css";
import { useNavigate } from "react-router-dom";
import { BASE_ICON_URL } from "../../../common/constants";

export default function ChatRoomCard({ chatRoom }) {
  let navigate = useNavigate();

  const goToChatRoom = (chatRoom) => {
    navigate(`/chat/${chatRoom.id}`, {
      state: {
        chatRoom,
      },
    });
  };

  return (
    <div
      className="chat-room-card clickable"
      onClick={() => {
        goToChatRoom(chatRoom);
      }}
    >
      <img
        className="chat-icon"
        src={`${BASE_ICON_URL}${chatRoom.imgSrc}`}
        alt=""
      />
      <span className="bold">{chatRoom.name}</span>
    </div>
  );
}
