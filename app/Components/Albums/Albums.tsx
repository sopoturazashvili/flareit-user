'use client';
import { useEffect, useState } from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import styles from './albums.module.scss';
import { Album } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';

const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        apiInstance
            .get('/albums')
            .then((res) => {
                setAlbums(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Albums</span>
            <div className={styles.list}>
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
    );
};

export default Albums;
