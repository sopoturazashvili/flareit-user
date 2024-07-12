"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import PlayerSmall from "./Components/PlayerControler/DesktopPlayer/DesktopPlayer";


export default function Home() {
  return (
    <main className={styles.main}>
        <PlayerSmall />
    </main>
  );
}
