"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import PlayerControler from "./Components/PlayerControler/PlayerControler";


export default function Home() {
  return (
    <main className={styles.main}>
        <PlayerControler/>
    </main>
  );
}
