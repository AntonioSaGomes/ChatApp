import React, { useContext, useEffect, useState, useRef } from "react";
import "./ChatContainer.css";
import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import InputMessage from "../../../components/InputMessage/InputMessage";
//import { useAuth } from "../../../hooks/useAuth";
import * as MessageService from "../../../services/messages";
import Header from "../../../components/Header/Header";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { getChatRoom } from "../../../services/chatRoom";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  //const { user } = useAuth(); TODO: check how this works
  const user = useContext(UserContext);
  const { chatRoomId } = useParams();
  const { state } = useLocation();
  const chatContainerRef = useRef(null);

  let chatRoom = state?.chatRoom;

  const scrollToBottom = () => {
    //TODO: not going exactly to the bottom
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const sendMessage = async (messageInput) => {
    debugger;
    try {
      const message = {
        content: messageInput,
        senderId: user.uid,
        chatRoomId,
        date: new Date(),
        photo: user.photoURL,
        displayName: user.displayName,
      };
      MessageService.sendMessage(message);
      scrollToBottom();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const unsubscribe = MessageService.streamChatMessages(
      chatRoomId,
      (querySnapshot) => {
        const updatedMessages = querySnapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .reverse();
        setMessages(updatedMessages);
        setTimeout(() => {
          scrollToBottom();
          setLoadingMessages(false);
        }, 0);
      },
      (error) => console.log(error)
    );
    return unsubscribe;
  }, []);

  const fetchChatRoom = () => {
    getChatRoom(chatRoomId)
      .then((doc) => {
        chatRoom = {
          id: doc.id,
          ...doc.data(),
        };
      })
      .catch();
  };
  useEffect(() => {
    if (chatRoom == null) {
      fetchChatRoom();
    }
  }, []);

  return (
    <div className="chat-container">
      <Header title={chatRoom?.name} banner={chatRoom?.bannerImg} />
      <div ref={chatContainerRef} className="chat-container-messages-wrapper">
        {loadingMessages && <LoadingSpinner />}
        <div
          className="chat-container-messages"
          style={{ visibility: loadingMessages ? "hidden" : "visible" }}
        >
          {messages.map((chatMessage) => {
            return (
              <ChatMessage key={chatMessage.id} chatMessage={chatMessage} />
            );
          })}
        </div>
      </div>
      <InputMessage onClickSend={sendMessage} />
    </div>
  );
}
