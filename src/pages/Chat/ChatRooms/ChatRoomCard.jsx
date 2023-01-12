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
      <div className="chat-room-card-left">
        <h3 className="chat-room-card-title bold capitalize">
          {chatRoom.name}
        </h3>
        <img
          className="chat-icon"
          src={`${BASE_ICON_URL}${chatRoom.imgSrc}`}
          alt=""
        />
      </div>
      <div className="chat-room-card-right">{chatRoom.description}</div>
    </div>
  );
}
