import { useEffect, useRef, useState } from "react";
import styles from "./SmallInputRange.module.scss"


const SmallInputRange = () => {

    const musicData = [
        { src: "/musicFolder/stairway.mp3" },
        { src: "/musicFolder/Bellin.mp3" },
        { src: "/musicFolder/judas.mp3" },
    ];
    const [currentTime, setCurrentTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);



    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
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
    }, []);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
          audioRef.current.currentTime = newTime;
          setCurrentTime(newTime);
        }
      };

      const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

      
    return (
        <div className={styles.inputContainer}>
            <input type="range" 
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
    )
}

export default SmallInputRange