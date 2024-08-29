'use client';
import { useEffect, useState } from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import styles from './TopAlbums.module.scss';
import axios from 'axios';

interface Album {
    coverImgUrl: string;
    title: string;
    releaseDate: string;
    albumName: string;
    artistName: string;
    id: number;
}

const TopAlbums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/albums')
            .then((res) => {
                setAlbums(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Top Albums</span>
            </div>
            <div className={styles.list}>
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        image={album.coverImgUrl}
                        albumName={album.title}
                        year={album.releaseDate}
                        artistName={album.artistName}
                        id={album.id}
                        pagePathName={'topalbums'}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopAlbums;
