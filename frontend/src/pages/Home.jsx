import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../(components)/Navbar";
import advancedContentProtection from "./../assets/advancedContentProtection.png";
import Button2 from "../(components)/Button2";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* hero Content */}
      <div className="flex flex-col mt-6 items-center ">
        <div className="text-3xl font-extrabold text-primary mt-8 text-center">
          "Safeguard Your Craft, Showcase Your Talent."
        </div>
        <div className="text-center mt-4 w-[50%] text-secondary ">
          At CraftShield, we understand the value of your creativity. Our
          platform is designed to offer top-notch protection for your original
          content while providing seamless portfolio management tools to help
          you shine.
        </div>
        <div className="mt-6">
          <Button2 name="Get Started" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        {/* First Grid */}
        <div className="grid grid-cols-2 gap-16 p-8 mt-8  items-center justify-center">
          {/* text  */}
          <div className="">
            <div className="text-primary text-xl font-bold">
              Advanced Content Protection
            </div>
            <div className="text-secondary text-justify w-[75%] mt-4">
              Utilize our cutting-edge technology to prevent unauthorized use
              and duplication of your creative works. Your intellectual property
              remains secure, giving you peace of mind to focus on what you do
              best—creating.
            </div>
          </div>
          {/* image  */}
          <div className="w-[458px]">
            <img src={advancedContentProtection} className="object-cover" />
          </div>
        </div>
        {/* Second Grid */}
        <div className="grid grid-cols-2 gap-16 p-8 mt-8  items-center ">
          {/* image  */}
          <div className="w-[458px]">
            <img src={advancedContentProtection} className="object-cover" />
          </div>
          {/* text  */}
          <div className="">
            <div className="text-primary text-xl font-bold">
              Portfolio Management
            </div>
            <div className="text-secondary text-justify w-[75%] mt-4">
              Easily organize and display your projects with our intuitive
              portfolio tools. Whether you're an artist, or designer,
              CraftShield helps you present your work professionally and
              attractively to potential clients and collaborators.
            </div>
          </div>
        </div>
        {/* Third Grid */}
        <div className="grid grid-cols-2 gap-16 p-8 mt-8  items-center ">
          {/* text  */}
          <div className="">
            <div className="text-primary text-xl font-bold">
              Portfolio Management
            </div>
            <div className="text-secondary text-justify w-[75%] mt-4">
              Easily organize and display your projects with our intuitive
              portfolio tools. Whether you're an artist, or designer,
              CraftShield helps you present your work professionally and
              attractively to potential clients and collaborators.
            </div>
          </div>
          <div className="">
            <div className="text-primary text-xl font-bold">
              Portfolio Management
            </div>
            <div className="text-secondary text-justify w-[75%] mt-4">
              Easily organize and display your projects with our intuitive
              portfolio tools. Whether you're an artist, or designer,
              CraftShield helps you present your work professionally and
              attractively to potential clients and collaborators.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
