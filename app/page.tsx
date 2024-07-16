"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import Modal from "./Components/Modal/Modal";
import PlayListInput from "./Components/Playlist/PlayListInput/PlayListInput";
import CreatedPlaylist from "./Components/Playlist/CreatedPlaylist/CreatedPlaytlist";

export default function Home() {

  return (
    <main className={styles.main}>
      <CreatedPlaylist/>
    </main>
  );
}
