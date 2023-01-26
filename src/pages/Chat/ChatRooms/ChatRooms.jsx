import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import { getChatRooms } from "../../../services/chatRoom";
import ChatRoomCard from "./ChatRoomCard";
import "./ChatRooms.css";

export default function ChatRooms() {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const getRooms = () => {
      getChatRooms().then((querySnapshot) => {
        const chatRoomData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setChatRooms(chatRoomData);
      });
    };
    getRooms();
  }, []);

  return (
    <div className="chat-room-page">
      <Header title="ChatRooms" arrow={false} />
      <div className="chat-rooms-container">
        {chatRooms?.map((chatRoom) => (
          <ChatRoomCard key={chatRoom.name} chatRoom={chatRoom} />
        ))}
      </div>
    </div>
  );
}
