import { useEffect, useRef, useState } from "react";
import TabletMusicInput from "../TabletMusicInput/TabletMusicInput"
import TabletMusicName from "../TabletMusicName/TabletMusicName"
import styles from "./TabletPlayer.module.scss"
import { musicData } from "@/app/helpers/MusicData";
import { useRecoilState } from "recoil";
import TabletMusicSwitch from "../TabletMusicSwitch/TabletMusicSwitch";
import TabeltVolume from "../TabletVolume/TabletVolume";
import { currentIndexState, tabletFullScrenState } from "@/app/state";
import TabletMusicShuffle from "../TabletMusicShuffle/TabletMusicShuffle";
import TabletFullScreen from "../../TabletFullScreen/TabletFullScreen";


const TabletPlayer = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const TabletaudioRef = useRef<HTMLAudioElement>(null);
    const [fullScreen,setFullScreen] = useRecoilState(tabletFullScrenState)
    

    useEffect(() => {
        TabletaudioRef?.current?.play();
    }, [currentIndex])

    const tabletFullScreen = () => {
        setFullScreen(!fullScreen)
    }

    

    return (
        <>
            <div className={styles.tabletPlayer} >
                <audio ref={TabletaudioRef} src={musicData[currentIndex].src} />
                <div className={styles.tabletPlayerContainer} >
                    <div className={styles.tabletMuscName} onClick={tabletFullScreen}>
                        <TabletMusicName musicName={"Starboy"} name={"Morgan Maxwell"} />
                    </div>
                    <div className={styles.inputAndSwitch}>
                        <TabletMusicInput TabletaudioRef={TabletaudioRef} />
                        <div className={styles.volumAndSwitch}>
                            <TabeltVolume TabletaudioRef={TabletaudioRef}  tabletWidth={50}  tabletInvolved={"none"} tabletVolumeWidth={24} tabletVolumeHeight={24} />
                            <TabletMusicSwitch TabletaudioRef={TabletaudioRef} />
                            <TabletMusicShuffle />
                        </div>
                    </div>
                </div>
            </div>
            {fullScreen && <TabletFullScreen tabletaudioRef={TabletaudioRef}  />}
        </>
    )
}

export default TabletPlayer