import { useRef } from "react"
import DesktopInputRange from "../DesktopPlayer/DesktopInputRange/DesktopInputRange"
import DesktopMusicSwitch from "../DesktopPlayer/DesktopMusicSwitch/DesktopMusicSwitch"
import DesktopShuffle from "../DesktopPlayer/DesktopShuffle/SmallShufle"
import DesktopVolume from "../DesktopPlayer/DesktopVolume/DesktopVolume"
import FullScreenImage from "./FullScreenImage/FullScreenImage"
import styles from "./TabletFullScreen.module.scss"
import MusicList from "./FullScreenMusicList/MusicList"
import TabletName from "../TabletAndMobile/TabletMusicName/TabletName/TabletName"

interface Props {
    tabletaudioRef:React.MutableRefObject<HTMLAudioElement | null>;

   
}

const TabletFullScreen = (props:Props) => {

    return (
        <div className={styles.TabletFullScreen}>
            <div className={styles.tabletFullscreenPadd}>
                <div className={styles.imageAndName}>
                    <FullScreenImage />
                    <TabletName musicName={"Starboy"} name={"Morgan Maxwell"}/>
                </div>
                <div className={styles.inputRangeCont}>
                    <DesktopShuffle />
                    <DesktopInputRange audioRef={props.tabletaudioRef} />
                </div>
                <div>
                    <DesktopMusicSwitch audioRef={props.tabletaudioRef} />
                    <DesktopVolume  width={275}  volumeWidth={32} volumeHeight={32} involved={""} audioRef={props.tabletaudioRef} />
                </div>
            </div>
            <div className={styles.musicListContainer}>
                <MusicList />
            </div>
        </div>
    )
}

export default TabletFullScreen