'use client';

import React from 'react';
import MusicListItem from '../MusicListItem/MusicListItem';
import NextPlay from './NextPlay/NextPlay';
import styles from './PlayerAndList.module.scss';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';

const PlayerAndList = () => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);

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

    const handleClick = (
        item: {
            image?: string;
            songTitle?: string;
            artistName?: string;
            songDuration?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        const allSrc = data.map((item) => item.src);
        const imageSrc = data.map((item) => item.image);
        const musicName = data.map((item) => item.songTitle);
        const title = data.map((item) => item.artistName);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setMusicName(musicName);
        setAuthorName(title);
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
