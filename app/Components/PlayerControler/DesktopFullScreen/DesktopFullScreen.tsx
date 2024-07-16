import React from "react";
import styles from "./DesktopFullScreen.module.scss";
import DesktopMusicName from "../DesktopPlayer/DesktopMusicName/DesktopMusicName";
import DesktopShuffle from "../DesktopPlayer/DesktopShuffle/SmallShufle";
import DesktopInputRange from "../DesktopPlayer/DesktopInputRange/DesktopInputRange";
import DesktopMusicSwitch from "../DesktopPlayer/DesktopMusicSwitch/DesktopMusicSwitch";
import DesktopVolume from "../DesktopPlayer/DesktopVolume/DesktopVolume";

interface Props {
    background: string;
    audioRef: React.MutableRefObject<HTMLAudioElement | null>;
    fullScreen: boolean;
    setFullScreen: (e: boolean) => void;
}

const DesktopFullScreen = (props: Props) => {
    const { audioRef, setFullScreen } = props;

    const background = {
        backgroundImage: `url${props.background}`,
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
                <img
                    className={styles.backIcon}
                    src="/PlayerControler/BackButton.svg"
                    alt="Back"
                    onClick={() => setFullScreen(false)}
                />
                <div className={styles.iconImage}>
                </div>
                <div>
                    <DesktopMusicName image={""} title={""} />
                </div>
                <div className={styles.inputRangeCont}>
                    <DesktopShuffle />
                    <DesktopInputRange audioRef={audioRef} />
                </div>
                <div>
                    <DesktopMusicSwitch audioRef={audioRef} />
                    <DesktopVolume width={275} volumeWidth={32} volumeHeight={32} involved={""} audioRef={props.audioRef} />
                </div>
            </div>
        </div>
    );
};

export default DesktopFullScreen;
