"use client";
import { Content, Header } from "./components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="overflow-hidden px-10">
      {/* This is a placeholder for the Navbar */}
      <div className="h-[176px]"></div>
      <Header />
      <Content />
    </main>
  );
}
