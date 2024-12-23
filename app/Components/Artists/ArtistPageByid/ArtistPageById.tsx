'use client';

import { useParams } from 'next/navigation';
import AlbumCard from '../../AlbumCard/AlbumCard';
import styles from './ArtistPageById.module.scss';
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
import useToggleMenu from '@/app/helpers/useToggleMenu';
import { useEffect, useState } from 'react';
import MusicCard from '../../MusicCard/MusicCard';
import apiInstance from '@/app/ApiInstance';
import ArtistId from './ArtistId/ArtistId';

interface Music {
    coverImgUrl: string;
    audioUrl: string;
    artistName: string;
    title: string;
    id: number;
}

interface Album {
    title: string;
    releaseDate: string;
    artistName: string;
    coverImgUrl: string;
    id: number;
    musics: Music[];
}

const ArtistPageById = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [musics, setMusics] = useState<Music[]>([]);
    const [albums, setAlbums] = useState<Album[]>([]);

    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const artistResult = await apiInstance.get(
                        `/authors/${id}`,
                    );

                    const artistData = artistResult.data || null;
                    setAlbums(artistData.albums || []);

                    const allMusics = artistData.albums.reduce(
                        (acc: Music[], album: Album) => {
                            return [...acc, ...album.musics];
                        },
                        [],
                    );

                    const shuffledMusics = shuffleArray(allMusics);

                    const selectedMusics = shuffledMusics.slice(0, 6);

                    setMusics(selectedMusics);
                } catch (error) {
                    console.error('Error fetching artist data:', error);
                    alert('Failed to fetch artist data. Please try again.');
                }
            };
            fetchData();
        }
    }, [id]);

    const shuffleArray = (array: Music[]) => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handleClick = (item: Music, index: number) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const allSrc = musics.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));
            const imageSrc = musics.map((music) => music.coverImgUrl);
            const artistNames = musics.map((music) => music.artistName);
            const titles = musics.map((music) => music.title);

            setIsPlaying(true);
            setGlobalId(item.id);
            setImage(imageSrc);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setArtist(artistNames);
            setTitle(titles);
        }
    };

    return (
        <div className={styles.container}>
            <ArtistId />
            <div className={styles.musicCard}>
                {musics.map((music, index) => (
                    <MusicCard
                        key={music.id}
                        image={music.coverImgUrl}
                        title={music.title}
                        teamName={music.artistName}
                        deleteOrLike={false}
                        id={music.id}
                        isPlaying={isPlaying && globalMusicId === music.id}
                        onClick={() => handleClick(music, index)}
                        index={index}
                        menuOpen={currentCardId === music.id}
                        toggleMenu={() => toggleMenu(music.id)}
                    />
                ))}
            </div>
            <div className={styles.albumContainer}>
                <p className={styles.albumsCont}>Albums</p>
                <div className={styles.albumMapContainer}>
                    {albums.map((album) => (
                        <AlbumCard
                            key={album.id}
                            image={album.coverImgUrl}
                            albumName={album.title}
                            year={album.releaseDate}
                            artistName={album.artistName}
                            id={album.id}
                            pagePathName={'albums'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistPageById;
