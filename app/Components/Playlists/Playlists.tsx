'use client';

import AddPlaylist from '@/app/Components/Playlist/AddPlaylist/AddPlaytlist';
import styles from './Playlists.module.scss';
import ArtistPlaylistItem from '@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem';

const Playlists = () => {
    const playlists = [
        {
            id: 1,
            name: 'My Everyday',
            image: '/images/myeveryday.png',
        },
        {
            id: 2,
            name: 'Party Songs',
            image: '/images/partySongs.png',
        },
        {
            id: 3,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 4,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 5,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 6,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 7,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 8,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 9,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 10,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 11,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 12,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 13,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 14,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 15,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
        {
            id: 16,
            name: 'Car Songs',
            image: '/images/carSongs.png',
        },
    ];

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Playlists</span>
            </div>
            <div className={styles.list}>
                <AddPlaylist />
                <ArtistPlaylistItem
                    image={'/icons/liked_music_icon.jpg'}
                    text={'Liked Songs'}
                    imageRound={false}
                    pathName={'/playlists/likedsongs'}
                />
                {playlists.map((playlist) => (
                    <ArtistPlaylistItem
                        key={playlist.id}
                        image={playlist.image}
                        text={playlist.name}
                        imageRound={false}
                        pathName={`/playlists/${playlist.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlists;
