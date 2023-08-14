import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1 className={styles.head}>Christian Smith</h1>
      <h4 className={styles.desc}>Software engineer and web developer</h4>
    </main>
  );
}
