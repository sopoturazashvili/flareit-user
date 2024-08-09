import React from 'react';
import { useRecoilState } from 'recoil';
import { indexState, musicGlobalState } from '@/app/state';
import styles from './RightSwitch.module.scss';

const RightSwitch = () => {
    const [, setIndex] = useRecoilState(indexState);
    const [musicSrc] = useRecoilState(musicGlobalState);

    const handleNextTrack = () => {
        setIndex((prevIndex) => (prevIndex + 1) % musicSrc.length);
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
