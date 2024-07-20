import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      This is home page
      <div className="text-green-700 cursor-pointer hover:text-green-800 ">
        <Link to="/about">About us</Link>
      </div>
    </div>
  );
};

export default Home;
