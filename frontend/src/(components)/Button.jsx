import React from "react";

const Button = (props) => {
  return (
    <div className="bg-white w-fit p-2 rounded-md">
      <button
        className="text-primary font-semibold hover:font-bold "
        onClick={props.click}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
