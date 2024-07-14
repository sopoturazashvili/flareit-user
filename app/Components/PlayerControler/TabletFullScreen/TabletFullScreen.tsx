import { useRef } from "react"
import DesktopInputRange from "../DesktopPlayer/DesktopInputRange/DesktopInputRange"
import DesktopMusicSwitch from "../DesktopPlayer/DesktopMusicSwitch/DesktopMusicSwitch"
import DesktopShuffle from "../DesktopPlayer/DesktopShuffle/SmallShufle"
import DesktopVolume from "../DesktopPlayer/DesktopVolume/DesktopVolume"
import FullScreenImage from "./FullScreenImage/FullScreenImage"
import FullScreenName from "./FullScreenName/FullScreenName"
import styles from "./TabletFullScreen.module.scss"

const TabletFullScreen = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    return(
        <div className={styles.TabletFullScreen}>
            <div className={styles.imageAndName}>
                <FullScreenImage/>
                <FullScreenName autor={"Imagine Dragons"} Name={"Believer"}/>
            </div>
            <div className={styles.inputRangeCont}>
                    <DesktopShuffle />
                    <DesktopInputRange audioRef={audioRef} />
                </div>
                <div>
                    <DesktopMusicSwitch audioRef={audioRef} />
                    <DesktopVolume  rotate={0} width={275} position={""} volumeWidth={32} volumeHeight={32} involved={""} audioRef={audioRef} />
                </div>
        </div>
    )
}

export default TabletFullScreen