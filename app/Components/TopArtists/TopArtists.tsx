'use client';

import ArtistPlaylistItem from '@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem';
import styles from './TopArtists.module.scss';
import { useEffect, useState } from 'react';
import { ArtistCard } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';

const TopArtists = () => {
    const [topArtists, setTopArtists] = useState<ArtistCard[]>([]);
    useEffect(() => {
        apiInstance
            .get('/authors/top-authors')
            .then((result) => {
                setTopArtists(result.data.slice(0, 20));
            })
            .catch((error) => {
                alert(error);
            });
    }, [topArtists]);

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Top Artists</span>
            </div>
            <div className={styles.list}>
                {topArtists.map((artist) => (
                    <ArtistPlaylistItem
                        key={artist.id}
                        image={artist.coverImgUrl}
                        text={artist.artistName}
                        imageRound={true}
                        pathName={`artists/${artist.id}`}
                        id={0}
                        edit={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopArtists;
