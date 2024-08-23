'use client';

import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import MusicCard from '../MusicCard/MusicCard';
import styles from './TopHits.module.scss';
import { useRecoilState } from 'recoil';
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface tophits {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
}

const TopHits = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [topHits, setTopHits] = useState<tophits[]>([]);
    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics')
            .then((result) => {
                setTopHits(result.data);
            })
            .catch((error) => {
                console.error('Error fetching music data:', error);
            });
    }, []);
    const handleClick = (
        item: {
            id: number;
            image?: string;
            title?: string;
            artist?: string;
            src?: string;
        },
        index: number,
    ) => {
        const allSrc = topHits.map((item) => item.audioUrl);
        const imageSrc = topHits.map((item) => item.coverImgUrl);
        const artist = topHits.map((item) => item.title);
        const title = topHits.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>Top Hits</span>
            <div className={styles.musicCardContainer}>
                {topHits.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.title}
                        deleteOrLike={false}
                        id={item.id}
                        isPlaying={isPlaying && globalMusicId === index}
                        onClick={() => handleClick(item, index)}
                        index={index}
                        menuOpen={currentCardId === item.id}
                        toggleMenu={() => toggleMenu(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopHits;
