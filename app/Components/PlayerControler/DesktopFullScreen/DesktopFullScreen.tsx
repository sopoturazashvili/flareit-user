import React from 'react';
import styles from './DesktopFullScreen.module.scss';
import DesktopMusicName from '../DesktopPlayer/DesktopMusicName/DesktopMusicName';
import DesktopInputRange from '../DesktopPlayer/DesktopInputRange/DesktopInputRange';
import Shuffle from '../Shuffle/Shufle';
import DesktopVolume from '../DesktopPlayer/DesktopVolume/DesktopVolume';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';
import { fullScreenState, globalImageState } from '@/app/state';
import { useRecoilState } from 'recoil';


const DesktopFullScreen = () => {
    const [image] = useRecoilState(globalImageState);
    const [, setFullScreen] = useRecoilState(fullScreenState);
    const background = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className={styles.backgroundCnot} style={background}>
            <div style={background} className={styles.backgroundBox}></div>
            <div className={styles.backgroundContainer}>
                <img
                    className={styles.backIcon}
                    src="/PlayerControler/BackButton.svg"
                    alt="Back"
                    onClick={() => setFullScreen(false)}
                />
                <div className={styles.iconImage}></div>
                <div>
                    <DesktopMusicName title={''} />
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
