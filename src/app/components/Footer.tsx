import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LogoWhite,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./svgs";
import Link from "next/link";

const Footer = () => {
  type Link = {
    name: string;
    url: string;
  };

  const links: Link[] = [
    { name: "Home", url: "#" },
    { name: "Pricing", url: "#" },
    { name: "Product", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Community", url: "#" },
    { name: "Privacy Policy", url: "#" },
  ];

  return (
    <div className="w-full h-auto py-16 bg-veryDarkBlue">
      <div className="w-full h-[140px] max-w-[1280px] mx-auto flex items-start justify-between">
        <div className="w-auto h-full flex flex-col items-start justify-between">
          <LogoWhite />
          <div className="flex items-center gap-x-3">
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>
        </div>
        <div
          className="space-y-3"
          style={{ columnCount: 2, columnGap: "12rem" }}
        >
          {links.map((link) => (
            <div key={link.name}>
              <Link href={link.url} className="text-zinc-300 hover:text-white">
                {link.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-auto h-full flex flex-col items-end justify-between gap-x-3">
          <div className="flex gap-x-3">
            <input
              className="w-64 px-5 h-14 bg-white rounded-[50px] focus:outline-none"
              placeholder="Updates in your inbox..."
            />
            <button className="w-fit px-7 h-14 bg-brightRed rounded-[50px]">
              <div className="text-white font-medium text-sm">Go</div>
            </button>
          </div>
          <div className="text-sm font-medium text-zinc-500 tracking-wide">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
