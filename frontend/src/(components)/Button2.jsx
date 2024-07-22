import React from "react";

const Button2 = (props) => {
  return (
    <div className=" bg-primary w-fit p-2 rounded-md">
      <button
        type={props?.type}
        className=" text-white font-semibold hover:font-bold "
        onClick={props?.click}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button2;
