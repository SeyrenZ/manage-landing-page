import React from "react";
import { Logo } from "./svgs";
import Link from "next/link";
import { Button } from ".";

const Navbar = () => {
  type Link = {
    name: string;
    url: string;
  };

  const links: Link[] = [
    { name: "Pricing", url: "#" },
    { name: "Product", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Community", url: "#" },
  ];

  return (
    <header className="w-full h-auto px-10 bg-transparent top-0 fixed z-50 ">
      <nav className="w-full max-w-[1280px] mx-auto py-16 flex justify-between items-center ">
        <Link href="#">
          <Logo />
        </Link>
        <div className="flex items-center gap-x-9">
          {links.map((link, index) => (
            <Link
              className="text-darkBlue hover:text-darkGrayBlue font-medium"
              key={index}
              href={link.url}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button />
      </nav>
    </header>
  );
};

export default Navbar;
