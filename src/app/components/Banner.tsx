import React from "react";
import { BgTablet } from "./svgs";

const Banner = () => {
  return (
    <div className="w-full h-auto py-20 bg-brightRed relative overflow-hidden">
      <BgTablet className="absolute z-0 opacity-5 top-0" />
      <BgTablet className="absolute z-0 opacity-5 top-[-700px] right-[-300px]" />
      <div className="w-full h-auto max-w-[1280px] mx-auto flex justify-between items-center relative z-10">
        <div className="text-4xl font-bold text-white">
          Simplify how your team
          <br />
          works today.
        </div>
        <button className="w-fit py-3.5 px-8 rounded-[50px] bg-white hover:scale-110 shadow-lg flex items-center justify-center transition ease-in-out duration-300">
          <div className="text-brightRed text-sm font-bold">Get Started</div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
