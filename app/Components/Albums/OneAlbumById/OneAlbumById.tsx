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
import styles from './OneAlbumById.module.scss';
import { useRecoilState } from 'recoil';
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import MusicCard from '../../MusicCard/MusicCard';

interface Musics {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
    artistName: string;
}

interface AlbumId {
    coverImgUrl: string;
    releaseDate: string;
    title: string;
    albumName: string;
    artistName: string;
}

const OneAlbumById = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setAuthorName] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [album, setAlbum] = useState<AlbumId | null>(null);
    const [musics, setMusics] = useState<Musics[]>([]);

    const param = useParams();
    const id = param.id;
    useEffect(() => {
        const fetchAlbum = async () => {
            if (id) {
                try {
                    const res = await axios.get(
                        `https://enigma-wtuc.onrender.com/albums/${id}`,
                    );
                    setAlbum(res.data);
                    setMusics(res.data.musics);
                } catch (error) {
                    alert(error);
                }
            }
        };

        fetchAlbum();
    }, [id, album]);

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
        const allSrc = musics.map((item) => ({
            audioUrl: item.audioUrl,
            id: item.id,
        }));
        const imageSrc = musics.map((music) => music.coverImgUrl);
        const musicName = musics.map((item) => item.artistName);
        const title = musics.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);

        setAuthorName(musicName);
        setTitle(title);
    };

    return (
        <div className={styles.OneAlbumByIdContainer}>
            <div>
                {album && (
                    <div className={styles.photoContainer}>
                        <img
                            className={styles.image}
                            src={album.coverImgUrl}
                            alt="Album Cover"
                        />
                        <div className={styles.nameContainer}>
                            <span className={styles.musicName}>
                                {album.title}
                            </span>
                            <span className={styles.artistName}>
                                {album.artistName}
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.musicCard}>
                {musics.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.artistName}
                        id={item.id}
                        deleteOrLike={false}
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

export default OneAlbumById;
