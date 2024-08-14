import React from 'react';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicNameState,
} from '@/app/state';
import styles from './RightSwitch.module.scss';

const RightSwitch = () => {
    const [, setIndex] = useRecoilState(indexState);
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [, setIsPlaying] = useRecoilState(isPlayingState);

    const handleNextTrack = () => {
        setIndex((prevIndex) => (prevIndex + 1) % musicSrc.length);
        setIsPlaying(true);
    };

    return (
        <img
            className={styles.RightSwitch}
            src="/PlayerControler/RightTwist.svg"
            alt="Right Twist"
            onClick={handleNextTrack}
        />
    );
};

export default RightSwitch;
