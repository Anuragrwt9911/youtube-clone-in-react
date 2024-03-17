import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(); //if not present in cache make an api call
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    //update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 w-[100%] bg-white flex justify-between items-center  max-w-[1240px] shadow-md ">
      <div className="flex items-center justify-between ">
        <i
          onClick={() => toggleMenuHandler()}
          class="cursor-pointer text-2xl mx-8 fa-solid fa-bars"
        ></i>

        <img
          className="h-[40px] w-[130px]  cursor-pointer"
          src="https://th.bing.com/th/id/OIP.gdsYnuzqxcjHkrkFHhMYFAAAAA?rs=1&pid=ImgDetMain"
        />
      </div>
      <div>
        <div>
          <input
            className=" text-lg  w-[500px] border border-black px-4 py-2 rounded-l-full focus:outline-none"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search "
          />
          <button className="bg-blue-500 text-lg text-white font-medium hover:bg-blue-900 rounded-r-full px-5 py-[8.6px]">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white shadow-xl w-[500px] rounded-2xl ">
            <ul className="px-5  py-2 ">
              {suggestions.map((item) => (
                <li key={item} className=" p-1  hover:bg-gray-100">
                  <i class="fa-solid fa-magnifying-glass mr-3 "></i> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="p-4 mr-10 cursor-pointer">
        <img
          className="size-10"
          src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7"
        />
      </div>
    </div>
  );
};

export default Head;
