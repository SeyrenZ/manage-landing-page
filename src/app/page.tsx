import { Content, Header } from "./components";

export default function Home() {
  return (
    <main className="overflow-hidden px-10">
      {/* This is a placeholder for the Navbar */}
      <div className="h-[176px]"></div>
      <Header />
      <Content />
    </main>
  );
}
