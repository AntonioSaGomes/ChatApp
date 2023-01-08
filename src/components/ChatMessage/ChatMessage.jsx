import React, { useContext } from "react";
import { UserContext } from "../../App";
import { formatMessageDate } from "../../utils/utils";
import Text from "../Text/Text";
import Tooltip from "../Tooltip/Tooltip";
//import { useAuth } from "../../hooks/useAuth";
import "./ChatMessage.css";

export default function ChatMessage({ chatMessage }) {
  //const { user } = useAuth();
  const user = useContext(UserContext);

  const myMessage = user?.uid === chatMessage.senderId;
  const { date, displayName } = chatMessage;
  const toolTipText = formatMessageDate(date);
  const nameToolTip = displayName;

  return (
    <div className={`chat-message-container${myMessage ? " self" : ""}`}>
      {myMessage && (
        <>
          <Tooltip text={toolTipText}>
            <div className="chat-message-content">{chatMessage.content}</div>
          </Tooltip>
          <Tooltip text={nameToolTip}>
            <img
              className="chat-message-img"
              src={chatMessage.photo}
              referrerPolicy="no-referrer"
            />
          </Tooltip>
        </>
      )}
      {!myMessage && (
        <>
          <Tooltip text={nameToolTip}>
            <img
              className="chat-message-img"
              src={chatMessage.photo}
              referrerPolicy="no-referrer"
            />
          </Tooltip>
          <Tooltip text={toolTipText}>
            <div className="chat-message-content">{chatMessage.content}</div>
          </Tooltip>
        </>
      )}
    </div>
  );
}
