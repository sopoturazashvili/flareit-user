"use client";

import React, { useRef } from "react";
import MusicListItem from "../MusicListItem/MusicListItem";
import DesktopPlayer from "../PlayerControler/DesktopPlayer/DesktopPlayer";
import NextPlay from "./NextPlay/NextPlay";
import styles from "./PlayerAndList.module.scss";
import { musicData } from "@/app/helpers/MusicData";
import { useRecoilState } from "recoil";
import { currentIndexState, isPlayingState } from "@/app/state";

const PlayerAndList = () => {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState); 
  const audioRef = useRef<HTMLAudioElement>(null);

  const playTrack = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true); 
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseTrack = () => {
    setIsPlaying(false); 
    if (audioRef.current) {
      audioRef.current.pause(); 
    }
  };

  const listData = musicData.map((item) => ({
    image: "/images/natashaB.png",
    songTitle: "Unwritten",
    artistName: "Natasha Bedingfield",
    songDuration: "4:17",
    src: item.src,
  }));

  return (
    <div className={styles.playerAndListBox}>
      <audio ref={audioRef} src={musicData[currentIndex]?.src} />
      <div className={styles.playerAndList}>
        <div className={styles.playerAndListContainer}>
          <NextPlay />
          <div className={styles.listDataContainer}>
            {listData.map((item, index) => (
              <MusicListItem
                key={index}
                image={item.image}
                songTitle={item.songTitle}
                artistName={item.artistName}
                songDuration={item.songDuration}
                src={item.src}
                audioRef={audioRef}
                isPlaying={isPlaying && currentIndex === index} 
                onClick={() => {
                  if (isPlaying && currentIndex === index) {
                    pauseTrack();
                  } else {
                    playTrack(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <DesktopPlayer audioRef={audioRef} />
        </div>
      </div>
    </div>
  );
};

export default PlayerAndList;
