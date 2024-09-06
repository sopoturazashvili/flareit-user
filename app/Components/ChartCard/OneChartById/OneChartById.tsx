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
import useToggleMenu from '@/app/helpers/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

interface ChartItem {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
    artistName: string;
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
    const [chartData, setChartData] = useState<ChartItem[]>([]);
    const params = useParams();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const id = params.id;
        if (id === '7') {
            axios
                .get(`https://enigma-wtuc.onrender.com/authors/162`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((result) => {
                    setChartData(result.data.albums[0].musics);
                })
                .catch((error) => {
                    console.error('Error fetching music data:', error);
                });
        } else {
            axios
                .get(`https://enigma-wtuc.onrender.com/musics`)
                .then((result) => {
                    setChartData(result.data);
                });
        }
    }, [params.id]);

    const handleClick = (item: ChartItem, index: number) => {
        const allSrc = chartData.slice(0, 14).map((data) => ({
            audioUrl: data.audioUrl,
            id: data.id,
        }));
        const imageSrc = chartData.slice(0, 14).map((data) => data.coverImgUrl);
        const artist = chartData.slice(0, 14).map((data) => data.artistName);
        const title = chartData.slice(0, 14).map((data) => data.title);

        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };

    const displayData = chartData.slice(0, 14);

    return (
        <div className={styles.OneChartById}>
            <div className={styles.pathContainer}>
                <p className={styles.pathColor}>Top Charts</p>
            </div>
            <div className={styles.oneMusicCard}>
                {displayData.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.artistName}
                        deleteOrLike={false}
                        id={item.id}
                        isPlaying={isPlaying && globalMusicId === item.id}
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
