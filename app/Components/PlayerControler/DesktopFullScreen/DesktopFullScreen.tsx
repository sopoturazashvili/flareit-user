import React from "react";
import styles from "./DesktopFullScreen.module.scss";
import DesktopMusicName from "../DesktopPlayer/DesktopMusicName/DesktopMusicName";
import DesktopInputRange from "../DesktopPlayer/DesktopInputRange/DesktopInputRange";
import DesktopMusicSwitch from "../DesktopPlayer/DesktopMusicSwitch/DesktopMusicSwitch";
import DesktopVolume from "../DesktopPlayer/DesktopVolume/DesktopVolume";
import Shuffle from "../Shuffle/Shufle";

interface Props {
  background: string;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  fullScreen: boolean;
  setFullScreen: (e: boolean) => void;
}

const DesktopFullScreen = (props: Props) => {
  const { audioRef, setFullScreen } = props;

  const background = {
    backgroundImage: `url(${props.background})`,
  };

  return (
    <div className={styles.backgroundCnot} style={background}>
      <div style={background} className={styles.backgroundBox}></div>
      <div className={styles.backgroundContainer}>
        <img
          className={styles.backIcon}
          src="/PlayerControler/BackButton.svg"
          alt="Back"
          onClick={() => setFullScreen(false)}
        />
        <div className={styles.iconImage}></div>
        <div>
          <DesktopMusicName
            image={""}
            title={""}
          />
        </div>
        <div className={styles.inputRangeCont}>
          <Shuffle />
          <DesktopInputRange audioRef={audioRef} />
        </div>
        <div>
          <DesktopMusicSwitch audioRef={audioRef} />
          <DesktopVolume
            width={275}
            volumeWidth={32}
            volumeHeight={32}
            involved={""}
            audioRef={props.audioRef}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopFullScreen;
