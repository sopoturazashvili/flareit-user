'use client';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneChartById.module.scss';
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
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface chartId {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
}

const OneChartById = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [chartId, setChartId] = useState<chartId[]>([]);
    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics')
            .then((result) => {
                setChartId(result.data);
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
        const allSrc = chartId.map((item) => ({
            audioUrl: item.audioUrl,
            id: item.id,
        }));
        const imageSrc = chartId.map((item) => item.coverImgUrl);
        const artist = chartId.map((item) => item.title);
        const title = chartId.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };
    return (
        <div className={styles.OneChartById}>
            <div className={styles.pathContainer}>
                <p className={styles.pathColor}>Top hits in 2024</p>
            </div>
            <div className={styles.oneMusicCard}>
                {chartId.map((item, index) => (
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

export default OneChartById;
