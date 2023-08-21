import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <h1 className={styles.head}>Christian Smith</h1>
      <h4 className={styles.desc}>Software engineer and web developer</h4>
    </main>
  );
}
