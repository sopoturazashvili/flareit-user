'use client';

import { useEffect, useState } from 'react';
import ArtistPlaylistItem from '../ArtistPlaylistListItem/ArtistPlaylistItem';
import styles from './Artists.module.scss';
import axios from 'axios';
import { ArtistCard } from '@/app/interfaces/item';

const Artists = () => {
    const [artists, setArtists] = useState<ArtistCard[]>([]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/authors')
            .then((result) => {
                setArtists(result.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, [artists]);

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
                    />
                ))}
            </div>
        </div>
    );
};

export default Artists;
