"use client";

import SectionHeader from "../Components/SectionHeader/SectionHeader";
import TopFourArtist from "../Components/TopFourArtist/TopFourArtist";
import TrendHitsCard from "../Components/TrendHitsCard/TrendHitsCard";
import styles from "./page.module.scss";

export default function Home() {
 

  return (
    <main className={styles.main}>
      <div>
        <TrendHitsCard />
      </div>
      <div className={styles.sectionAndCard}>
        <SectionHeader title={"Popular Artists"} href={"artists"} />
        <div className={styles.artistCard}>
          <TopFourArtist/>
        </div>
      </div>
    </main>
  );
}
