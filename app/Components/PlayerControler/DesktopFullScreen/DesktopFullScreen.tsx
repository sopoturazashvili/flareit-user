import React from "react";
import styles from "./DesktopFullScreen.module.scss";
import DesktopMusicName from "../DesktopPlayer/DesktopMusicName/DesktopMusicName";
import DesktopShuffle from "../DesktopPlayer/DesktopShuffle/SmallShufle";
import DesktopInputRange from "../DesktopPlayer/DesktopInputRange/DesktopInputRange";
import DesktopMusicSwitch from "../DesktopPlayer/DesktopMusicSwitch/DesktopMusicSwitch";
import DesktopVolume from "../DesktopPlayer/DesktopVolume/DesktopVolume";

interface Props {
    background: string;
    audioRef: any;
    fullScreen: boolean;
    setFullScreen: (e: boolean) => void;
}

const DesktopFullScreen = (props: Props) => {
    const { audioRef, setFullScreen } = props;

    const background = {
        backgroundImage: `url("/PlayerControler/MusicPhoto.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        zIndex: 0,
        position: "absolute",
        top: 0,
        filter: "blur(10px)",
        webkitFilter: "blur(8px)"
    };


    return (
        <div className={styles.backgroundCnot}>
            <div style={background}></div>
            <div className={styles.backgroundContainer}>
                <div className={styles.iconImage}>
                    <img
                        src="/PlayerControler/BackButton.svg"
                        alt="Back"
                        onClick={() => setFullScreen(false)}
                    />
                </div>
                <div>
                    <DesktopMusicName image={"/PlayerControler/MusicNamePhoto.svg"} title={"Imagine dragons- Believer"} />
                </div>
                <div className={styles.inputRangeCont}>
                    <DesktopShuffle />
                    <DesktopInputRange audioRef={audioRef} />
                </div>
                <div>
                    <DesktopMusicSwitch audioRef={audioRef} />
                    <DesktopVolume  rotate={0} width={275} position={""} volumeWidth={32} volumeHeight={32} involved={""} audioRef={undefined} />
                </div>
            </div>
        </div>
    );
};

export default DesktopFullScreen;
