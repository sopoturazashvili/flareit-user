import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import styles from './Playlist.module.scss';
import { useRecoilState } from 'recoil';
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../MusicCard/MusicCard';
import { useParams } from 'next/navigation';

interface Props {
    image: string;
}

interface PlaylistItem {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    artistName: string;
    id: number;
}

const Playlist = (props: Props) => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
    const token = localStorage.getItem('token');
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (token) {
            axios
                .get(`https://enigma-wtuc.onrender.com/playlists/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((result) => {
                    setPlaylist(result.data.musics);
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            console.error('No authentication token found.');
        }
    }, [token]);

    const handleClick = (
        item: {
            coverImgUrl?: string;
            title?: string;
            artistName?: string;
            id: number;
            audioUrl?: string;
        },
        index: number,
    ) => {
        const allSrc = playlist.map((item) => item.audioUrl);
        const imageSrc = playlist.map((item) => item.coverImgUrl);
        const artist = playlist.map((item) => item.title);
        const title = playlist.map((item) => item.artistName);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };

    return (
        <div className={styles.playlistContainer}>
            <div className={styles.photoAndNameCont}>
                <div className={styles.photoAndName}>
                    <img src={props.image} />
                    <span className={styles.name}>My Everyday</span>
                </div>
            </div>
            <div className={styles.topFourHits}>
                {playlist.map((item, index) => (
                    <MusicCard
                        id={item.id}
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.artistName}
                        isPlaying={isPlaying && globalMusicId === index}
                        deleteOrLike={true}
                        onClick={() => handleClick(item, index)}
                        index={index}
                        menuOpen={currentCardId === item.id}
                        toggleMenu={() => toggleMenu(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlist;
