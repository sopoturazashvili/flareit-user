import React, { useRef, useState, useEffect } from "react";
import styles from "./DesktopPlayer.module.scss";
import { musicData } from "@/app/helpers/MusicData";
import { currentIndexState } from "@/app/state";
import { useRecoilState } from "recoil";
import DesktopVolume from "./DesktopVolume/DesktopVolume";
import DesktopMusicSwitch from "./DesktopMusicSwitch/DesktopMusicSwitch";
import DesktopInputRange from "./DesktopInputRange/DesktopInputRange";
import DesktopFullScreen from "../DesktopFullScreen/DesktopFullScreen";
import DesktopMusicName from "./DesktopMusicName/DesktopMusicName";
import Shuffle from "../Shuffle/Shufle";

interface Props {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const DesktopPlayer = (props:Props) => {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (props.audioRef.current && musicData.length > 0) {
      props.audioRef.current.src = musicData[currentIndex]?.src || "";
      props.audioRef.current.play();
    }
  }, [currentIndex, props.audioRef]);

  return (
    <>
      <div className={styles.playerSmall}>
        <audio ref={props.audioRef} />
        <div className={styles.nameAndRange}>
          <DesktopMusicName
            image={"/PlayerControler/MusicPhoto.svg"}
            title={""}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
          <DesktopInputRange audioRef={props.audioRef} />
        </div>
        <div className={styles.musicPlayer}>
          <DesktopVolume
            audioRef={props.audioRef}
            width={50}
            volumeWidth={24}
            volumeHeight={24}
            involved={"none"}
          />
          <DesktopMusicSwitch audioRef={props.audioRef}/>
          <Shuffle />
        </div>
      </div>
      {fullScreen && (
        <DesktopFullScreen
          background={""}
          audioRef={props.audioRef}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
      )}
    </>
  );
};

export default DesktopPlayer;




function setIsPlaying(arg0: boolean) {
  throw new Error("Function not implemented.");
}

