"use client";
import MusicListItem from "../MusicListItem/MusicListItem";
import DesktopPlayer from "../PlayerControler/DesktopPlayer/DesktopPlayer";
import NextPlay from "./NextPlay/NextPlay";
import styles from "./PlayerAndList.module.scss";

const PlayerAndList = () => {
  const listData = [
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
    {
      image: "/images/natashaB.png",
      songTitle: "Unwritten",
      artistName: "Natasha Bedingfield",
      songDuration: "4:17",
    },
  ];

  return (
    <div className={styles.playerAndListBox}>
      <div className={styles.playerAndList}>
        <div className={styles.playerAndListContainer}>
          <NextPlay />
          <div className={styles.listDataContainer}>
            {listData.map((item) => (
              <MusicListItem
                image={item.image}
                songTitle={item.songTitle}
                artistName={item.artistName}
                songDuration={item.songDuration}
              />
            ))}
          </div>
        </div>
        <div>
          <DesktopPlayer />
        </div>
      </div>
    </div>
  );
};

export default PlayerAndList;
