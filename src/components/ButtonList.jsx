import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const name = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Comedy",
    "Movies",
  ];
  return (
    <div className="flex justify-evenly items-center ">
      {name.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
