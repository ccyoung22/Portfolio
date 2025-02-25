"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [isShrunk, setIsShrunk] = useState(false);

  console.log("Header component rendered");
  console.log(isShrunk);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // // Listen for the scroll event and log the event data
    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });
  }, []);

  return (
    <div className={styles.page}>
      <Header isShrunk={isShrunk} />
      <AboutMe />
      <Projects />
    </div>
  );
}
