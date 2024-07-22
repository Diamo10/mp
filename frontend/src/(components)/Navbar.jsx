import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const loginBtn = () => {
    navigate("/about");
  };
  return (
    <div className="bg-primary text-white p-8 flex justify-between ">
      <div className="font-bold text-3xl">craftShield</div>
      <div className="flex gap-4 items-center text-xl font-semibold">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Button name="Login" click={loginBtn} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
