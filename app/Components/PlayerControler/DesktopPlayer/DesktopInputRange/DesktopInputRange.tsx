import React, { useEffect, useRef, useState } from "react";
import styles from "./DesktopInputRange.module.scss";
import { formatTime } from "@/app/helpers/FormatTime";
import { useRecoilState } from "recoil";
import {
  audioDurrationState,
  currentIndexState,
  currentTimeState,
} from "@/app/state";
import { playNext } from "@/app/helpers/PlayNext";

interface Props {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const DesktopInputRange = (props: Props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  useEffect(() => {
    const audio = props.audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setAudioDuration(audio.duration);
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateTime);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateTime);
      };
    }
  }, [props.audioRef]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (props.audioRef.current) {
      props.audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="range"
        className={styles.inputRange}
        value={currentTime}
        min={0}
        max={audioDuration || 0}
        onChange={handleSeek}
      />
      <div className={styles.musicTimeCont}>
        <span className={styles.color}>{formatTime(currentTime)}</span>
        <span className={styles.color}>{formatTime(audioDuration)}</span>
      </div>
    </div>
  );
};

export default DesktopInputRange;
