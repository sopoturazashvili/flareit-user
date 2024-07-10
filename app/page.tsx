"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import HeaderAndNav from "./Components/Header/HeaderAndNavigation/HeaderAndNav";


export default function Home() {
  return (
    <main className={styles.main}>
        <HeaderAndNav/>
    </main>
  );
}
