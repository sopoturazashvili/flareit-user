'use client';

import AddPlaylist from '@/app/Components/Playlist/AddPlaylist/AddPlaytlist';
import styles from './Playlists.module.scss';
import ArtistPlaylistItem from '@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem';
import { useEffect, useState } from 'react';
import { Playlist } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';
import { useRecoilState } from 'recoil';
import { clickState } from '@/app/state';

const Playlists = () => {
    const [playlists, setPlaylist] = useState<Playlist[]>([]);
    const [click] = useRecoilState(clickState);

    useEffect(() => {
        apiInstance.get(`/users/me`).then((result) => {
            setPlaylist(result.data.playlists);
        });
    }, [playlists.length, click]);
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
                            playlist.musics[0]?.coverImgUrl
                                ? playlist.musics[0]?.coverImgUrl
                                : '/allFolders/images/MusicLogo.svg'
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
