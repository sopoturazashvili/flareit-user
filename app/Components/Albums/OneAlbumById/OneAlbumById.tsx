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
import useToggleMenu from '@/app/helpers/useToggleMenu';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import MusicCard from '../../MusicCard/MusicCard';
import apiInstance from '@/app/ApiInstance';
import AlbumIdCont from './AlbumId/AlbumId';

interface Musics {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
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
    const [musics, setMusics] = useState<Musics[]>([]);

    const param = useParams();
    const id = param.id;
    useEffect(() => {
        const fetchAlbum = async () => {
            if (id) {
                try {
                    const res = await apiInstance.get(`/albums/${id}`);
                    setMusics(res.data.musics);
                } catch (error) {
                    alert(error);
                }
            }
        };

        fetchAlbum();
    }, []);

    const handleClick = (
        item: {
            image?: string;
            title?: string;
            artistName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = musics.map((item) => item.coverImgUrl);
            const allSrc = musics.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));

            const artistName = musics.map((item) => item.artistName);
            const title = musics.map((item) => item.title);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setTitle(title);
            setAuthorName(artistName);
        }
    };

    return (
        <div className={styles.OneAlbumByIdContainer}>
            <AlbumIdCont />
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
