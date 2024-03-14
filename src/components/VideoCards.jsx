import React from "react";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="">
      <img className="rounded-xl w-full  " src={thumbnails.medium.url} />

      <ul className="mt-2">
        <li className="font-bold text-[16px]">{title}</li>
        <li>{channelTitle}</li>
        <li>views : {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCards;
