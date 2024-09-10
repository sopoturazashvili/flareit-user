'use client';

import { useEffect, useState } from 'react';
import ArtistPlaylistItem from '../ArtistPlaylistListItem/ArtistPlaylistItem';
import styles from './Artists.module.scss';
import { ArtistCard } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';

const Artists = () => {
    const [artists, setArtists] = useState<ArtistCard[]>([]);

    useEffect(() => {
        apiInstance
            .get('/authors')
            .then((result) => {
                setArtists(result.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Artists</span>
            </div>
            <div className={styles.list}>
                {artists.map((artist) => (
                    <ArtistPlaylistItem
                        key={artist.id}
                        image={artist.coverImgUrl}
                        text={artist.artistName}
                        imageRound={true}
                        pathName={`/artists/${artist.id}`}
                        id={artist.id}
                        edit={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default Artists;
