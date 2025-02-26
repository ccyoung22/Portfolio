"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Lenis from "lenis";

export default function Home() {
  const [isShrunk, setIsShrunk] = useState(false);
  console.log(isShrunk);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });
  }, []);

  return (
    <div className="main">
      <div className="div1">Hello</div>

      <div className="div2">About me</div>
      <div className="div3">Projects</div>
      <div className="div4">Skills</div>
      <div className="div5">Contact</div>
    </div>

    // <div className={styles.page}>
    //   <Header isShrunk={isShrunk} />
    //   <div className={styles.wrapper}>
    //     <AboutMe />
    //     <Projects />
    //   </div>
    // </div>
  );
}
