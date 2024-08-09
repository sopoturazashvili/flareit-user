import React from 'react';
import styles from './DesktopFullScreen.module.scss';
import DesktopMusicName from '../DesktopPlayer/DesktopMusicName/DesktopMusicName';
import DesktopInputRange from '../DesktopPlayer/DesktopInputRange/DesktopInputRange';
import Shuffle from '../Shuffle/Shufle';
import DesktopVolume from '../DesktopPlayer/DesktopVolume/DesktopVolume';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';

interface Props {
    background: string;
    fullScreen: boolean;
    setFullScreen: (e: boolean) => void;
}

const DesktopFullScreen = (props: Props) => {
    const background = {
        backgroundImage: `url(${props.background})`,
    };

    return (
        <div className={styles.backgroundCnot} style={background}>
            <div style={background} className={styles.backgroundBox}></div>
            <div className={styles.backgroundContainer}>
                <img
                    className={styles.backIcon}
                    src="/PlayerControler/BackButton.svg"
                    alt="Back"
                    onClick={() => props.setFullScreen(false)}
                />
                <div className={styles.iconImage}></div>
                <div>
                    <DesktopMusicName image={''} title={''} />
                </div>
                <div className={styles.inputRangeCont}>
                    <Shuffle />
                    <DesktopInputRange />
                </div>
                <div>
                    <DesktopMusicSwitch />
                    <DesktopVolume
                        width={275}
                        volumeWidth={32}
                        volumeHeight={32}
                        involved={''}
                    />
                </div>
            </div>
        </div>
    );
};

export default DesktopFullScreen;
