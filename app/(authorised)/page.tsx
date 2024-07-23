"use client";
import React, { useState, useEffect } from "react";
import ArtistCard from "../Components/ArtistCard/ArtistCard";
import SectionHeader from "../Components/SectionHeader/SectionHeader";
import TrendHitsCard from "../Components/TrendHitsCard/TrendHitsCard";
import styles from "./page.module.scss";

const Home = () => {

  const data = [
    {
      image: "/images/artistCard.svg",
      artist: "Coldplay",
      year: "1997",
      id: 1,
    },
    {
      image: "/images/artistCard.svg",
      artist: "Coldplay",
      year: "1997",
      id: 2,
    },
    {
      image: "/images/artistCard.svg",
      artist: "Coldplay",
      year: "1997",
      id: 3,
    },
    {
      image: "/images/artistCard.svg",
      artist: "Coldplay",
      year: "1997",
      id: 4,
    },
    {
      image: "/images/artistCard.svg",
      artist: "Coldplay",
      year: "1997",
      id: 5,
    },
    {
      image: "/images/artistCard.svg",
      artist: "Coldplay",
      year: "1997",
      id: 6,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.tredHits}>
        <TrendHitsCard />
      </div>
      <div className={styles.sectionAndArtist}>
          <SectionHeader title={"see all"} href={"artists"} />
        <div className={styles.artistCard}>
          {data.slice(0, 4).map((item) => (
            <ArtistCard
              key={item.id}
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
};

export default Home;
