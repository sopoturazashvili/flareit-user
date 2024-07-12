import { useEffect, useRef, useState } from "react";
import styles from "./SmallInputRange.module.scss"
import { formatTime } from "@/app/helpers/FormatTime";
import { useRecoilState } from "recoil";
import { audioDurrationState, currentIndexState, currentTimeState } from "@/app/state";



const SmallInputRange = () => {
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState)
    const [audioDuration, setAudioDuration] = useRecoilState(audioDurrationState)
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
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
    }, [currentIndex]);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
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