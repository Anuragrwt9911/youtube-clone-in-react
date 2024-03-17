import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (isMenuOpen) return null;

  return (
    <div className="shadow-lg p-8 w-[18rem] ">
      <ul className="p-2 ">
        <li className="hover:bg-slate-100 px-4 py-2 cursor-pointer rounded-lg ">
          <i class="fa-solid fa-house"></i>
          Home
        </li>
        <li className="hover:bg-slate-100 px-4 py-2 cursor-pointer rounded-lg ">
          <i class="fa-solid fa-house"></i>
          Shorts
        </li>
        <li className="hover:bg-slate-100 px-4 py-2 cursor-pointer rounded-lg ">
          <i class="fa-solid fa-house"></i>
          Subscriptions
        </li>
      </ul>
      <ul className="p-4">
        <h1 className="font-bold">You </h1>

        <li>Your Channel</li>
        <li>Watch Later</li>
        <li>PlayList</li>
        <li>Your Videos</li>
        <li>History</li>
        <li>Show more</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul className="p-4">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Fashion</li>
        <li>Learning</li>
      </ul>
      <h1 className="font-bold">More from Youtube</h1>
      <ul className="p-4">
        <li>Youtube Premium</li>
        <li>Youtube Kids</li>
        <li>Youtube Music</li>
        <li>Youtube Studio</li>
      </ul>
      <ul className="p-4">
        <li>Settings</li>
        <li>Report History</li>
        <li>Send Feedback</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default SideBar;
