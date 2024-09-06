import PlaylistItem from '@/app/Components/PlaylistItem/PlaylistItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './DropDownMenu.module.scss';
import Link from 'next/link';

interface Playlists {
    title: string;
    id: number;
}

interface Props {
    id: number;
}
const DropDownMenu = (props: Props) => {
    const [playlists, setPlaylist] = useState<Playlists[]>([]);
    const [, setId] = useState<number>();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            axios
                .get('https://enigma-wtuc.onrender.com/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setPlaylist(res.data.playlists);
                })
                .catch((error) => {
                    console.error('Error fetching playlists:', error);
                });
        }
    }, [token]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setId(res.data.id);
            })
            .catch((error) => {
                console.error('Error fetching playlists:', error);
            });
    });

    return (
        <div className={styles.container}>
            <Link className={styles.create} href={'/playlists'}>
                + Create Playlist
            </Link>
            {playlists.map((playlist) => (
                <PlaylistItem
                    playlistName={playlist.title}
                    key={playlist.id}
                    id={playlist.id}
                    idsecond={props.id}
                />
            ))}
        </div>
    );
};

export default DropDownMenu;
