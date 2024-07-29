"use client";

import MusicCard from "../Components/MusicCard/MusicCard";
import TabletPlayer from "../Components/PlayerControler/TabletPlayer/TabletPlayer/TabletPlayer";
import SectionHeader from "../Components/SectionHeader/SectionHeader";
import TopFourAlbums from "../Components/TopFourAlbums/TopFourAlbums";
import TopFourArtist from "../Components/TopFourArtist/TopFourArtist";
import TopFourCharts from "../Components/TopFourCharts/TopFourCharts";
import TopFourHits from "../Components/TopFourHits/TopFourHits";
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
      <div className={styles.sectionHeader}>
        <SectionHeader title={"Top Hits"} href={"trendHits"} />
        <div className={styles.hitsContainer}>
          <TopFourHits />
        </div>
      </div>
      <div className={styles.sectionHeader}>
        <SectionHeader title={"Top Albums"} href={"topAlbums"} />
        <div className={styles.artistCard}>
          <TopFourAlbums pagePathName={"topAlbums"} />
        </div>
      </div>
    </main>
  );
}
