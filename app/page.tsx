"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./Components/Header/HeaderContainer";


export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
    </main>
  );
}
