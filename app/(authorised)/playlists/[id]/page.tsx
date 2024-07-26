"use client";

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import MusicCard from "@/app/Components/MusicCard/MusicCard";
import { Turret_Road } from "next/font/google";

const playlist = () => {
  const data = [
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 1,
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 2,
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 3,
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 4,
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.pageName}>My Everyday</span>
      </div>
      <div className={styles.photoAndNameCont}>
        <div className={styles.photoAndName}>
          <img src="/images/playlistPhoto.svg" />
          <span className={styles.name}>My Everyday</span>
        </div>
      </div>
      <div className={styles.topFourHits}>
        {data.map((item) => (
          <MusicCard
            image={item.image}
            title={item.title}
            teamName={item.temeName}
            deleteOrLike={true}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default playlist;
