"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header({ isShrunk }) {
  return (
    <section
      className={`${styles.container1} ${isShrunk ? styles.shrunk : ""}`}
    >
      <p className={styles.titleText}>Hi, I'm Caitlin</p>
    </section>
  );
}
