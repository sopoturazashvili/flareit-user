"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import CreatedPlaylist from "./Components/Playlist/CreatedPlaylist/CreatedPlaytlist";


export default function Home() {

  return (
    <main className={styles.main}>
      <CreatedPlaylist />
    </main>
  );
}
