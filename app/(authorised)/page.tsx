"use client";

import SectionHeader from "../Components/SectionHeader/SectionHeader";
import TopFourArtist from "../Components/TopFourArtist/TopFourArtist";
import TopFourCharts from "../Components/TopFourCharts/TopFourCharts";
import TrendHitsCard from "../Components/TrendHitsCard/TrendHitsCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <TrendHitsCard />
      </div>
      <div className={styles.sectionHeader}>
        <SectionHeader title={"Popular Artists"} href={"artists"} />
        <div className={styles.artistCard}>
          <TopFourArtist />
        </div>
      </div>
      <div className={styles.sectionHeader}>
        <SectionHeader title={"Top Charts"} href={"topCharts"} />
        <div className={styles.artistCard}>
          <TopFourCharts />
        </div>
      </div>
    </main>
  );
}
