import React from "react";
import Image from "next/image";
import { Button } from ".";
import { BgDesktop, BgTablet, IllustrationHero } from "./svgs";

const Header = () => {
  return (
    <div className="w-full min-h-[50vh] bg-white ">
      <div className="w-full min-h-[50vh] max-w-[1280px] mx-auto flex items-center relative">
        <div className="absolute z-0 right-[-290px] top-[-300px]">
          <BgTablet />
        </div>
        <div className="absolute z-10 right-0 ">
          <IllustrationHero />
        </div>
        <div className="flex flex-col items-start gap-y-8 relative z-20">
          <div className="text-6xl text-darkBlue font-bold leading-[1.10] ">
            Bring everyone
            <br /> together to build
            <br /> better products.
          </div>
          <div className="text-darkGrayBlue text-lg text-left">
            Manage makes it simple for software teams
            <br /> to plan day-to-day tasks while keeping the
            <br /> larger team goals in view.
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
