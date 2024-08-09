'use client';

import React from 'react';
import MusicListItem from '../MusicListItem/MusicListItem';
import NextPlay from './NextPlay/NextPlay';
import styles from './PlayerAndList.module.scss';
import { useRecoilState } from 'recoil';
import {
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
} from '@/app/state';

const PlayerAndList = () => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);

    const data = [
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            id: 49,
            src: '/Player/stairway.mp3',
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            id: 50,
            src: '/Player/Bellin.mp3',
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            id: 51,
            src: '/Player/judas.mp3',
        },
        {
            image: '/images/natashaB.png',
            songTitle: 'Unwritten',
            artistName: 'Natasha Bedingfield',
            songDuration: '4:17',
            id: 52,
            src: '/Player/Bellaire.mp3',
        },
    ];

    const handleClick = (item, index: number) => {
        setIsPlaying(true);
        setGlobalId(item.id);

        const allSrc = data.map((item) => item.src);
        setGlobalsrc(allSrc);
        setImage(item.image);
        setActiveIdx(index);
    };

    return (
        <div className={styles.playerAndListBox}>
            <div className={styles.playerAndList}>
                <div className={styles.playerAndListContainer}>
                    <NextPlay />
                    <div className={styles.listDataContainer}>
                        {data.map((item, index) => (
                            <MusicListItem
                                index={index}
                                key={item.id}
                                image={item.image}
                                songTitle={item.songTitle}
                                artistName={item.artistName}
                                songDuration={item.songDuration}
                                isPlaying={
                                    isPlaying && globalMusicId === item.id
                                }
                                onClick={() => handleClick(item, index)}
                                id={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerAndList;
