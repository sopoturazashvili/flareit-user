'use client';

import styles from './WeeklyHits.module.scss';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import { useRecoilState } from 'recoil';
import useToggleMenu from '@/app/helpers/useToggleMenu';
import MusicCard from '../MusicCard/MusicCard';
import { useEffect, useState } from 'react';
import apiInstance from '@/app/ApiInstance';

interface Music {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
    artistName: string;
}

const WeeklyHits = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const [weeklyHits, setWeeklyHits] = useState<Music[]>([]);

    useEffect(() => {
        apiInstance
            .get('/musics/tophits/week')
            .then((result) => {
                setWeeklyHits(result.data.slice(0, 10));
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
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = weeklyHits.map((item) => item.coverImgUrl);
            const allSrc = weeklyHits.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));
            const musicName = weeklyHits.map((item) => item.artistName);
            const title = weeklyHits.map((item) => item.title);
            setIsPlaying(true);
            setGlobalId(item.id);
            setImage(imageSrc);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setMusicName(musicName);
            setAuthorName(title);
        }
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>Weekly Hits</span>
            <div className={styles.containerInside}>
                {weeklyHits.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.artistName}
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

export default WeeklyHits;
