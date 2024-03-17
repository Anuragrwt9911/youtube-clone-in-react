import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

//passing some ata to cats

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  //subscribe to the chat msgs
  const chatMessages = useSelector((store) => store.chat.messages);
  //for some data t live chats we use api polling
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api is polling");
      //msgs are polled / api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30) + "😍",
        })
      );
    }, 4000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="overflow-y-scroll h-[600px] flex flex-col-reverse">
      {chatMessages.map((item, index) => (
        <ChatMsg key={index} name={item.name} message={item.message} />
      ))}
    </div>
  );
};

export default LiveChat;
