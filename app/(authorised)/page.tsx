"use client";

import ArtistCard from "../Components/ArtistCard/ArtistCard";
import SectionHeader from "../Components/SectionHeader/SectionHeader";
import TrendHitsCard from "../Components/TrendHitsCard/TrendHitsCard";
import styles from "./page.module.scss";

export default function Home() {
  const data = [
    {
      image: "/images/artistCard.svg",
      artist: "coldplay",
      year: "1997",
      id: 0,
    },
    {
      image: "/images/artistCard.svg",
      artist: "coldplay",
      year: "1997",
      id: 1,
    },
    {
      image: "/images/artistCard.svg",
      artist: "coldplay",
      year: "1997",
      id: 2,
    },
    {
      image: "/images/artistCard.svg",
      artist: "coldplay",
      year: "1997",
      id: 3,
    },
  ];

  return (
    <main className={styles.main}>
      <div>
        <TrendHitsCard />
      </div>
      <div className={styles.sectionAndCard}>
        <SectionHeader title={"see all"} href={"artists"} />
        <div className={styles.artistCard}>
          {data.map((item) => (
            <ArtistCard
              image={item.image}
              artist={item.artist}
              year={item.year}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
