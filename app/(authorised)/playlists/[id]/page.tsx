"use client";

import TopFourHits from "@/app/Components/TopFourHits/TopFourHits";
import styles from "./page.module.scss";

const playlist = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.pageName}>nwioenvien</span>
      </div>
      <div className={styles.photoAndNameCont}>
        <div className={styles.photoAndName}>
          <img src="/images/playlistPhoto.svg" />
          <span className={styles.name}>My Everyday</span>
        </div>
      </div>
      <div className={styles.topFourHits}>
        <TopFourHits />
        <TopFourHits />
        <TopFourHits />
      </div>
    </div>
  );
};

export default playlist;
