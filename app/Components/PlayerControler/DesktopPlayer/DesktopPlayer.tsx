import React, { useRef, useState, useEffect } from "react";
import styles from "./DesktopPlayer.module.scss";
import { musicData } from "@/app/helpers/MusicData";
import { currentIndexState } from "@/app/state";
import { useRecoilState } from "recoil";
import DesktopVolume from "./DesktopVolume/DesktopVolume";
import DesktopMusicSwitch from "./DesktopMusicSwitch/DesktopMusicSwitch";
import DesktopInputRange from "./DesktopInputRange/DesktopInputRange";
import DesktopFullScreen from "../DesktopFullScreen/DesktopFullScreen";
import DesktopShuffle from "./DesktopShuffle/SmallShufle";
import DesktopMusicName from "./DesktopMusicName/DesktopMusicName";

const DesktopPlayer = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [fullScreen, setFullScreen] = useState(false); 

    useEffect(() => {
        audioRef.current?.play();
    }, [currentIndex]);

    return (
        <>
            <div className={styles.playerSmall}>
                <audio ref={audioRef} src={musicData[currentIndex].src} />
                <div className={styles.nameAndRange}>
                    <DesktopMusicName
                        image={"/PlayerControler/MusicPhoto.svg"}
                        title={"Imagine dragons- Believer"}
                        fullScreen={fullScreen}
                        setFullScreen={setFullScreen}
                    />
                    <DesktopInputRange audioRef={audioRef} />
                </div>
                <div className={styles.musicPlayer}>
                    <DesktopVolume audioRef={audioRef} rotate={-90} width={50} position={"absolute"} volumeWidth={24} volumeHeight={24} involved={"none"} />
                    <DesktopMusicSwitch audioRef={audioRef} />
                    <DesktopShuffle />
                </div>
            </div>
            {fullScreen && (
                <DesktopFullScreen background={""} audioRef={audioRef} fullScreen={fullScreen} setFullScreen={setFullScreen}/>
            )}
        </>
    );
};

export default DesktopPlayer;









