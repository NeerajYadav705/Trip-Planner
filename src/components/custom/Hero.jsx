import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center px-6 md:px-24 lg:px-52 gap-6 md:gap-9">
      <h1 className="font-extrabold text-[32px] md:text-[40px] lg:text-[50px] mt-12 md:mt-16 text-center">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>{" "}
        Personalized Itineraries at Your Fingertips.
      </h1>
      <p className="text-lg md:text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button className="mt-4 md:mt-6">Get Started, It's Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
