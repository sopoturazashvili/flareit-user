'use client';

import AddPlaylist from '@/app/Components/Playlist/AddPlaylist/AddPlaytlist';
import styles from './Playlists.module.scss';
import ArtistPlaylistItem from '@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Playlist {
    title: string;
    id: number;
}

const Playlists = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/playlists')
            .then((result) => {
                setPlaylists(result.data);
            })
            .catch((error) => {
                alert(error);
            });
    });

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Playlists</span>
            </div>
            <div className={styles.list}>
                <AddPlaylist />
                {playlists.map((playlist) => (
                    <ArtistPlaylistItem
                        key={playlist.id}
                        image={'/images/defaultPlaylist.png'}
                        text={playlist.title}
                        imageRound={false}
                        pathName={`/playlists/${playlist.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlists;
