"use client"
import Image from "next/image";
import styles from "./page.module.css";
import FillAndTextButton from "./Components/FillButton/FillAndTextButton";



export default function Home() {
  return (
    <main className={styles.main}>
      <FillAndTextButton text={"see all"} fill={false} />
    </main>
  );
}
