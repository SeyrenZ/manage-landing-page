"use client";
import { Banner, Content, Header, Review, Footer } from "./components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="pt-[176px] overflow-hidden">
      <Header />
      <Content />
      <Review />
      <Banner />
      <Footer />
    </main>
  );
}
