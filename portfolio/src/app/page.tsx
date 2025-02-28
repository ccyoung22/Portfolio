"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Card1 from "./components/Card1/Card1.jsx";
import Card2 from "./components/Card2/Card2.jsx";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <main className="main">
      <section className="div1">
        <Card1 />
      </section>

      <section className="div2">
        <Card2 />
      </section>
      <section className="div3">Projects</section>
      <section className="div4">Skills</section>
      <section className="div5">Contact</section>
    </main>
  );
}
