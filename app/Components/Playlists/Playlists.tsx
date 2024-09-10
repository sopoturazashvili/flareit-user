'use client';

import AddPlaylist from '@/app/Components/Playlist/AddPlaylist/AddPlaytlist';
import styles from './Playlists.module.scss';
import ArtistPlaylistItem from '@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Playlist } from '@/app/interfaces/item';

const Playlists = () => {
    const [playlists, setPlaylist] = useState<Playlist[]>([]);

    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    useEffect(() => {
        if (token) {
            axios
                .get(`https://enigma-wtuc.onrender.com/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((result) => {
                    setPlaylist(result.data.playlists);
                });
        } else {
            console.error('No authentication token found.');
        }
    }, [token, playlists.length]);
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Playlists</span>
            </div>
            <div className={styles.list}>
                <AddPlaylist />
                {playlists.map((playlist: Playlist) => (
                    <ArtistPlaylistItem
                        key={playlist.id}
                        image={
                            playlist.musics[playlist.musics.length - 1]
                                ?.coverImgUrl
                                ? playlist.musics[playlist.musics.length - 1]
                                      ?.coverImgUrl
                                : '/images/defaultPlaylist.png'
                        }
                        text={playlist.title}
                        imageRound={false}
                        pathName={`/playlists/${playlist.id}`}
                        id={playlist.id}
                        value={playlist.title}
                        edit={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlists;
