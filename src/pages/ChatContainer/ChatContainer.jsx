import React, { useEffect, useState } from "react";
import "./ChatContainer.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import InputMessage from "../../components/InputMessage/InputMessage";
import { chatMessages } from "../../mocks/testData";
import { useAuth } from "../../hooks/useAuth";
import * as MessageService from "../../services/messages";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const mockMessage = chatMessages[0];

  const { user } = useAuth();
  console.log(user);

  const sendMessage = async (messageInput) => {
    try {
      const message = {
        content: messageInput,
        senderId: user.uid,
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
    const chatId = "aosdiasdl";
    const unsubscribe = MessageService.streamChatMessages(
      chatId,
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

  return (
    <div className="chat-container">
      <div className="chat-container-messages">
        {messages.map((chatMessage) => (
          <ChatMessage key={chatMessage.id} chatMessage={chatMessage} />
        ))}
      </div>
      <InputMessage onClickSend={sendMessage} />
    </div>
  );
}
