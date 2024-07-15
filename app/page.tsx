"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import TabletPlayer from "./Components/PlayerControler/TabletPlayer/TabletPlayer/TabletPlayer";
import DesktopPlayer from "./Components/PlayerControler/DesktopPlayer/DesktopPlayer";
import TabletFullScreen from "./Components/PlayerControler/TabletFullScreen/TabletFullScreen";
import MobilePlayer from "./Components/PlayerControler/MobilePlayer/MobilePlayer";


export default function Home() {
  return (
    <main className={styles.main}>
        <TabletPlayer/>
        {/* <DesktopPlayer/> */}
        {/* <TabletFullScreen /> */}
        {/* <MobilePlayer/> */}
    </main>
  );
}
