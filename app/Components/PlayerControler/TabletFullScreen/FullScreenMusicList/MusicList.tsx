import MusicListItem from '@/app/Components/MusicListItem/MusicListItem';
import styles from './MusicList.module.scss';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
    globalImageState,
    indexState,
    musicGlobalState,
    musicId,
} from '@/app/state';

const MusicList = () => {
    const [, setGlobalId] = useRecoilState(musicId);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const data = [
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/stairway.mp3',
            id: 80,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/Bellin.mp3',
            id: 81,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/judas.mp3',
            id: 82,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/Bellaire.mp3',
            id: 83,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/IVdasi.mp3',
            id: 84,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/SoMany.mp3',
            id: 85,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/Kendrick.mp3',
            id: 86,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/stairway.mp3',
            id: 87,
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            src: '/Player/Bellin.mp3',
            id: 88,
        },
    ];

    const handleClick = (item, index: number) => {
        setGlobalId(item.id);
        const allSrc = data.map((item) => item.src);
        setGlobalsrc(allSrc);
        setImage(item.image);
        setActiveIdx(index);
    };

    const [musicUp, setMusicUp] = useState(false);

    const musicUpFunc = () => {
        setMusicUp(!musicUp);
    };

    return (
        <div className={styles.musicList}>
            <div
                className={styles.musicListBackground}
                style={{
                    transform: musicUp ? 'translateY(0%)' : 'translateY(0%)',
                }}
            >
                <div
                    className={`${styles.imageContainer} ${
                        musicUp ? styles.rotateUp : ''
                    }`}
                    onClick={musicUpFunc}
                >
                    {musicUp ? (
                        <img
                            src="/PlayerControler/MusicDown.svg"
                            alt="MusicDown"
                        />
                    ) : (
                        <img src="/PlayerControler/MusicUp.svg" alt="MusicUp" />
                    )}
                </div>
                <div className={styles.nameAndMusic}>
                    <p className={styles.nextContainer}>Next Play</p>
                    <div className={styles.musicListItem}>
                        {data.slice(0, musicUp ? 6 : 0).map((item, index) => (
                            <MusicListItem
                                id={index}
                                key={item.songTitle}
                                image={item.image}
                                songTitle={item.songTitle}
                                artistName={item.artistName}
                                songDuration={item.songDuration}
                                onClick={() => {
                                    handleClick(item, index);
                                }}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;
