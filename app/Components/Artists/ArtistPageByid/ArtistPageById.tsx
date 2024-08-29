'use client';

import { useParams } from 'next/navigation';
import AlbumCard from '../../AlbumCard/AlbumCard';
import MusicCard from '../../MusicCard/MusicCard';
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
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Music {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
}

interface Artist {
    biography: string;
    id: number;
    artistName: string;
    coverImgUrl: string;
}

interface Album {
    title: string;
    releaseDate: string;
    artistName: string;
    coverImgUrl: string;
    id: number;
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
    const [artist, setArtistData] = useState<Artist | null>(null);
    const [albums, setAlbums] = useState<Album[]>([]);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const musicsResult = await axios.get(
                        'https://enigma-wtuc.onrender.com/musics',
                    );
                    setMusics(musicsResult.data);

                    const artistResult = await axios.get(
                        `https://enigma-wtuc.onrender.com/authors/${id}`,
                    );
                    setArtistData(artistResult.data);

                    const albumsResult = await axios.get(
                        'https://enigma-wtuc.onrender.com/albums',
                    );
                    setAlbums(albumsResult.data);
                } catch (error) {
                    console.error(
                        'An error occurred while fetching data:',
                        error,
                    );
                }
            };
            fetchData();
        }
    }, [id]);

    const handleClick = (item: Music, index: number) => {
        const allSrc = musics.map((music) => music.audioUrl);
        const imageSrc = musics.map((music) => music.coverImgUrl);
        const artistNames = musics.map((music) => music.title);
        const titles = musics.map((music) => music.title);

        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artistNames);
        setTitle(titles);
    };

    return (
        <div className={styles.container}>
            <div className={styles.nameAndPhoto}>
                {artist && (
                    <>
                        <img
                            className={styles.photo}
                            src={artist.coverImgUrl}
                            alt={artist.artistName}
                        />
                        <p className={styles.nameColor}>{artist.artistName}</p>
                        <p className={styles.biografiContainer}>
                            {artist.biography}
                        </p>
                    </>
                )}
            </div>
            <div className={styles.musicCard}>
                {musics.map((music, index) => (
                    <MusicCard
                        key={music.id}
                        image={music.coverImgUrl}
                        title={music.title}
                        teamName={music.title}
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
