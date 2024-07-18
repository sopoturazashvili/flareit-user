"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import CreatedPlaylist from "./Components/Playlist/AddPlaylist/AddPlaytlist";
import AddPlaylist from "./Components/Playlist/AddPlaylist/AddPlaytlist";


export default function Home() {

  return (
    <main className={styles.main}>
      <AddPlaylist/>
    </main>
  );
}
