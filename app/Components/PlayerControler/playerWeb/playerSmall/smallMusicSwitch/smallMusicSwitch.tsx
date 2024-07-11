import { useRef, useState } from "react"
import styles from "./SmallMusicSwitch.module.scss"



const SmallMusicSwitch = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(isPlaying);
    

    const audioRef = useRef<HTMLAudioElement>(null); 
      const playPause = () => {
        const audio = audioRef.current;
        if (audio) {
          setIsPlaying(!isPlaying);
          if (!isPlaying) {
            audio.play();
          } else {
            audio.pause();
          }
        }
      };
    

    return (
        <div className={styles.musicSwitch}>
            <img src="/PlayerControler/LeftSwitch.svg" alt="Left Switch"/>
            <img src="/PlayerControler/LeftTwist.svg" alt="Left Twist"/>
            <div className={styles.playPaus} onClick={playPause}>
                {isPlaying ? <img src="/PlayerControler/Play.svg" alt="Play"/> : <img src="/PlayerControler/Pause.svg" alt="Pause" />}
            </div>
            <img src="/PlayerControler/RightSwitch.svg" alt="Right Switch"/>
            <img src="/PlayerControler/RightTwist.svg" alt="Right Twist"/>
        </div>
    )
}

export default SmallMusicSwitch