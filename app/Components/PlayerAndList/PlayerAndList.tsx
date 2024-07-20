"use client"

import { useRef } from "react";
import MusicListItem from "../MusicListItem/MusicListItem";
import DesktopPlayer from "../PlayerControler/DesktopPlayer/DesktopPlayer";
import NextPlay from "./NextPlay/NextPlay";
import styles from "./PlayerAndList.module.scss";
import { musicData } from "@/app/helpers/MusicData";
import { useRecoilState } from "recoil";
import { currentIndexState } from "@/app/state";

const PlayerAndList = () => {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const audioRef = useRef<HTMLAudioElement>(null);

  const listData = musicData.map((item) => ({
    image: "/images/natashaB.png",
    songTitle: "Unwritten",
    artistName: "Natasha Bedingfield",
    songDuration: "4:17",
    src: item.src,
  }));

  const setCurrentIndexAndPlay = (index: number) => {
    setCurrentIndex(index);  
    if (audioRef.current) {
      audioRef.current.play(); 
    }
  };

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
                playFunc={() => setCurrentIndexAndPlay(index)}
                audioRef={audioRef}
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


