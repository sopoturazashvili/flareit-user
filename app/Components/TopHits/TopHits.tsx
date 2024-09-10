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
import useToggleMenu from '@/app/helpers/useToggleMenu';
import { useEffect, useState } from 'react';
import apiInstance from '@/app/ApiInstance';

interface Music {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
    artistName: string;
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
    const [topHits, setTopHits] = useState<Music[]>([]);
    useEffect(() => {
        apiInstance
            .get('/musics/tophits')
            .then((result) => {
                setTopHits(result.data.slice(0, 20));
            })
            .catch((error) => {
                console.error('Error fetching music data:', error);
            });
    }, []);
    const handleClick = (
        item: {
            image?: string;
            title?: string;
            temeName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = topHits.map((item) => item.coverImgUrl);
            const allSrc = topHits.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));

            const musicName = topHits.map((item) => item.title);
            const title = topHits.map((item) => item.title);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setTitle(musicName);
            setArtist(title);
        }
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

export default TopHits;
