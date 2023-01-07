import React, { useEffect, useState } from "react";
import "./ChatContainer.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import InputMessage from "../../../components/InputMessage/InputMessage";
import { useAuth } from "../../../hooks/useAuth";
import * as MessageService from "../../../services/messages";
import Header from "../../../components/Header/Header";
import { useLocation, useParams } from "react-router-dom";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);

  const { user } = useAuth();
  const { chatRoomId } = useParams();
  const { state } = useLocation();

  let chatRoom = state?.chatRoom;

  const sendMessage = async (messageInput) => {
    try {
      const message = {
        content: messageInput,
        senderId: user.uid,
        chatRoomId,
        date: new Date(),
        photo: user.photo,
        displayName: user.displayName,
      };
      const docRef = await addDoc(
        collection(firestore, "chatMessages"),
        message
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const unsubscribe = MessageService.streamChatMessages(
      chatRoomId,
      (querySnapshot) => {
        const updatedMessages = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(updatedMessages);
      },
      (error) => console.log(error)
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (chatRoom == null) {
      console.log("get from database");
    }
  }, []);

  return (
    <div className="chat-container">
      <Header title={chatRoom?.name} banner={chatRoom?.bannerImg} />
      <div className="chat-container-messages">
        {messages.map((chatMessage) => (
          <ChatMessage key={chatMessage.id} chatMessage={chatMessage} />
        ))}
      </div>
      <InputMessage onClickSend={sendMessage} />
    </div>
  );
}
