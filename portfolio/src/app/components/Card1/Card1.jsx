"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import styles from "./Card1.module.css";

function Card1() {
  const scrollToFirstPanel = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={styles.containerCard1}>
      <Link href="/portfolio/src/app/components/Card1" passHref></Link>
      <button className={styles.homeButton} onClick={scrollToFirstPanel}>
        Home
      </button>
      <h1 className={styles.hiText}>Hi I'm Caitlin</h1>
    </section>
  );
}

export default Card1;
