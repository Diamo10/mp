import React from "react";

const Button = (props) => {
  return (
    <div className="bg-red-400 w-fit p-4 rounded-md">
      <button
        className="text-white font-semibold hover:font-extrabold"
        onClick={props.click}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
