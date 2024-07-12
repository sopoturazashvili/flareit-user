import { useRef, useState } from "react"
import styles from "./SmallMusicSwitch.module.scss"
import { useRecoilState } from "recoil";
import { currentTimeState, isPlayingState } from "@/app/state";
import LeftSwitch from "./LeftSwitch/LeftSwitch";
import RightTwist from "./RightTwist/RightTwist";

interface Props {
  audioRef: any
}


const SmallMusicSwitch = (props: Props) => {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [currenTime, setCurrentTime] = useRecoilState(currentTimeState)


  const playPause = () => {
    if (props.audioRef.current) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        props.audioRef.current.play();
      } else {
        props.audioRef.current.pause();
      }
    }
  };


  const Twistt = (direction: 'forward' | 'backward') => {

    const increment = direction === "forward" ? 5 : -5;


    if (props.audioRef.current) {
      let twist = props.audioRef.current.currentTime + increment;

      twist = Math.max(0, Math.min(twist, props.audioRef.current.duration));

      props.audioRef.current.currentTime = twist;
      setCurrentTime(twist);
    }
  };



  return (
    <div className={styles.musicSwitch}>
      <LeftSwitch />
      <img src="/PlayerControler/LeftTwist.svg" alt="Left Twist" onClick={() => Twistt("backward")} />
      <div className={styles.playPaus} onClick={playPause}>
        {isPlaying ? <img src="/PlayerControler/Play.svg" alt="Play" /> : <img src="/PlayerControler/Pause.svg" alt="Pause" />}
      </div>
      <img src="/PlayerControler/RightSwitch.svg" alt="Right Switch" onClick={() => Twistt("forward")} />
      <RightTwist audioRef={props.audioRef} currentIndex={0} />
    </div>
  )
}

export default SmallMusicSwitch