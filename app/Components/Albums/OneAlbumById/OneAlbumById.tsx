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
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneAlbumById.module.scss';
import { useRecoilState } from 'recoil';
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface albumId {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
}
const OneAlbumById = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [albumId, setAlbumId] = useState<albumId[]>([]);
    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics')
            .then((result) => {
                setAlbumId(result.data);
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
        const allSrc = albumId.map((item) => item.audioUrl);
        const imageSrc = albumId.map((item) => item.coverImgUrl);
        const artist = albumId.map((item) => item.title);
        const title = albumId.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };
    return (
        <div className={styles.OneAlbumByIdContainer}>
            <div>
                <div className={styles.photoContainer}>
                    <img src="/images/OneAlbumPhoto.svg" alt="OneAlbumPhoto" />
                    <div className={styles.nameContainer}>
                        <span className={styles.musicName}>Lovers</span>
                        <span className={styles.artistName}>Taylor Swift</span>
                    </div>
                </div>
            </div>
            <div className={styles.musicCard}>
                {albumId.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.title}
                        id={item.id}
                        deleteOrLike={false}
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

export default OneAlbumById;
