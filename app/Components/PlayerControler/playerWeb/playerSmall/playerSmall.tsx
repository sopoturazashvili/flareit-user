import { useRef } from "react"
import styles from "./PlayerSmall.module.scss"
import SmallInputRange from "./SmallInputRange/SmallInputRange"
import SmallMusicSwitch from "./SmallMusicSwitch/SmallMusicSwitch"
import SmallShuffle from "./SmallShuffle/SmallShufle"
import SmallVolume from "./SmallVolume/SmallVolume"
import SmallMusicName from "./SmallimageAndTitle/SmallMusicName"
import { musicData } from "@/app/helpers/MusicData"
import { currentIndexState } from "@/app/state"
import { useRecoilState } from "recoil"


const PlayerSmall = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
    const audioRef = useRef<HTMLAudioElement>(null);
    
    
    return (
        <div className={styles.playerSmall}>
            <audio ref={audioRef} src={musicData[currentIndex].src} />
            <div className={styles.nameAndRange}>
                <SmallMusicName image={"/PlayerControler/MusicPhoto.svg"} title={"Imagine dragons- Believer"} />
                <SmallInputRange />
            </div>
            <div className={styles.musicPlayer}>
                <SmallVolume  audioRef={audioRef}/>
                <SmallMusicSwitch audioRef={audioRef}/>
                <SmallShuffle />
            </div>
        </div>
    )
}

export default PlayerSmall