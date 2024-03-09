"use client";
import { Content, Header, Review } from "./components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="pt-[176px] overflow-hidden px-10">
      <Header />
      <Content />
      <Review />
    </main>
  );
}
