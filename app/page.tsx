"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import ArtistPlaylistItem from "./Components/ArtistPlaylistListItem/ArtistPlaylistItem";





export default function Home() {
  return (
    <main className={styles.main}>
        <ArtistPlaylistItem image={"/images/myeveryday.png"} text={"my everyday"} imageRound={false} />
    </main>
  );
}
