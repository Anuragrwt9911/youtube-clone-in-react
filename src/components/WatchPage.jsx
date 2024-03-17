import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ChatMsg from "./ChatMsg";
const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v")); //search v query which is our video id

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu);
  }, []);

  return (
    <div className=" flex flex-wrap ">
      <div className="p-2 m-2   ">
        <iframe
          width="800"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-slate-50 w-[350px]">
        <LiveChat />
        <input
          className="w-[250px] px-3 py-2"
          type="text"
          placeholder="Type a message.."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-blue-600 px-5 py-2 rounded-r-full text-white">
          {" "}
          Send
        </button>
      </div>
      <div className="">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
