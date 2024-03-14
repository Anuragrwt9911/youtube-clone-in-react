import React from "react";

const Button = ({ name }) => {
  return (
    <div className="">
      <button className="font-medium hover:bg-slate-200 bg-slate-100 px-5 py-2 m-5 rounded-xl">
        {name}
      </button>
    </div>
  );
};

export default Button;
