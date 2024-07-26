"use client";
import Playlist from "@/app/Components/Playlist/Playlist";
import styles from "./page.module.scss";

const OnePlaylist = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.pageName}>My Everyday</span>
      </div>
      <Playlist image="" />
    </div>
  );
};

export default OnePlaylist;
