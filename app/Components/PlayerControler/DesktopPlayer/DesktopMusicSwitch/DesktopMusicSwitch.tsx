import { MutableRefObject, useEffect, useRef, useState } from "react"
import styles from "./DesktopMusicSwitch.module.scss"
import { useRecoilState } from "recoil";
import { currentTimeState, isPlayingState } from "@/app/state";
import LeftSwitch from "./LeftSwitch/LeftSwitch";
import RightSwitch from "./RightSwitch/RightSwitch";
import { Twistt } from "@/app/helpers/Twist";
import DesktopRightTwist from "./DesktopRightTwist/DesktopRightTwist";
import DesktopLeftTwist from "./DesktopLeftTwist/DesktopLeftTwist";

interface Props {
  // setCurrentTime(arg0: string, audioRef: MutableRefObject<HTMLAudioElement | null>, setCurrentTime: any): void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
}

const DesktopMusicSwitch = (props: Props) => {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [currenTime, setCurrentTime] = useRecoilState(currentTimeState)


  const playPause = () => {
    const audio = props.audioRef.current
    if (audio) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  // const Twistt = (direction: 'forward' | 'backward') => {

  //   const increment = direction === "forward" ? 5 : -5;

  //   if (props.audioRef.current) {
  //     let twist = props.audioRef.current.currentTime + increment;
  //     twist = Math.max(0, Math.min(twist, props.audioRef.current.duration));
  //     props.audioRef.current.currentTime = twist;
  //     setCurrentTime(twist);
  //   }
  // };
  
  return (
    <div className={styles.musicSwitch}>
      <LeftSwitch />
      <DesktopLeftTwist audioRef={props.audioRef} setCurrentTime={setCurrentTime}/>
      <div className={styles.playPaus} onClick={playPause}>
        {isPlaying ? <img src="/PlayerControler/Play.svg" alt="Play" /> : <img src="/PlayerControler/Pause.svg" alt="Pause" />}
      </div>
     <DesktopRightTwist audioRef={props.audioRef} setCurrentTime={setCurrentTime}/>
      <RightSwitch audioRef={props.audioRef} />
    </div>
  )
}

export default DesktopMusicSwitch