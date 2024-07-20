import React from "react";
import styles from "./MusicListItem.module.scss";
import Image from "next/image";

interface Props {
  image: string;
  songTitle: string;
  artistName: string;
  songDuration: string;
  src: string;
  playFunc?: () => void;  
  audioRef: React.RefObject<HTMLAudioElement>;  
}

const MusicListItem: React.FC<Props> = (props) => {
  const handlePlay = () => {
    if (props.playFunc) {
      props.playFunc();  
    } else {
      if (props.audioRef.current) {
        props.audioRef.current.play();  
      }
    }
  };

  return (
    <div className={styles.listItem}>
      <audio src={props.src} />
      <div className={styles.itemImageWrapper}>
        <Image
          className={styles.itemImage}
          src={props.image}
          width={54}
          height={56}
          alt="Music Card Cover"
        />
        <div className={styles.itemHoverPhoto}>
          <Image
            src="/images/PlayHover.svg"
            alt="Play Button"
            width={54}
            height={56}
            onClick={handlePlay}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionCenter}>
          <div>
            <h5 className={styles.songName}>{props.songTitle}</h5>
            <span className={styles.artistName}>{props.artistName}</span>
          </div>
          <div>
            <span className={styles.songDuration}>{props.songDuration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicListItem;
