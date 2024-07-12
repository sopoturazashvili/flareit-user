import { useEffect, useRef, useState } from "react"
import styles from "./DesktopPlayer.module.scss"
import  { DesktopMusicName } from "./DesktopMusicName/DesktopMusicName"
import { musicData } from "@/app/helpers/MusicData"
import { currentIndexState } from "@/app/state"
import { useRecoilState } from "recoil"
import DesktopVolume from "./DesktopVolume/DesktopVolume"
import DesktopMusicSwitch from "./DesktopMusicSwitch/DesktopMusicSwitch"
import DesktopShuffle from "./DesktopShuffle/SmallShufle"
import DesktopInputRange from "./DesktopInputRange/DesktopInputRange"


const PlayerSmall = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        audioRef.current.play()
      }, [currentIndex])
    

    return (
        <div className={styles.playerSmall}>
            <audio ref={audioRef} src={musicData[currentIndex].src} />
            <div className={styles.nameAndRange}>
                <DesktopMusicName image={"/PlayerControler/MusicPhoto.svg"} title={"Imagine dragons- Believer"} />
                <DesktopInputRange audioRef={audioRef} />
            </div>
            <div className={styles.musicPlayer}>
                <DesktopVolume audioRef={audioRef} />
                <DesktopMusicSwitch audioRef={audioRef} />
                <DesktopShuffle />
            </div>
        </div>
    )
}

export default PlayerSmall







