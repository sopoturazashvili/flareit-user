"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import PlayerSmall from "./Components/PlayerControler/DesktopPlayer/DesktopPlayer";
import PlayerFullScreen from "./Components/PlayerControler/DesktopFullScreen/DesktopFullScreen";
import DesktopPlayer from "./Components/PlayerControler/DesktopPlayer/DesktopPlayer";


export default function Home() {
  return (
    <main className={styles.main}>
        <DesktopPlayer/>
    </main>
  );
}
