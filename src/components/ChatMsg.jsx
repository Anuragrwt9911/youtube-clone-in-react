import React from "react";

const ChatMsg = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg gap-4 my-3 ">
      <img
        className="size-10"
        src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7"
      />
      <p className="ml-2 font-bold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMsg;
