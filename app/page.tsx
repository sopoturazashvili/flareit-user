"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import HeaderContainer from "./Components/Header/HeaderContainer";


export default function Home() {
  return (
    <main className={styles.main}>
        <HeaderContainer/>
    </main>
  );
}
