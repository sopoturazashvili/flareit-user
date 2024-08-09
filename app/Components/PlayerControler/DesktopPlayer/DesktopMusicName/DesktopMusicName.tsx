import React from 'react';
import styles from './DesktopMusicName.module.scss';
import { useRecoilState } from 'recoil';
import { fullScreenState, globalImageState } from '@/app/state';

interface Props {
    title: string;
}

const DesktopMusicName = (props: Props) => {
    const [image] = useRecoilState(globalImageState);
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);

    return (
        <div
            className={styles.imageAndTitle}
            onClick={() => {
                setFullScreen?.(!fullScreen);
            }}
        >
            <img
                className={fullScreen ? styles.fullScreenImage : styles.image}
                src={image ? image : '/PlayerControler/Default.svg'}
                alt="Music Cover"
            />
            <span
                className={fullScreen ? styles.fullScreentitle : styles.title}
            >
                {props.title}
            </span>
        </div>
    );
};

export default DesktopMusicName;
