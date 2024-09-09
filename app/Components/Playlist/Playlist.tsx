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
import useToggleMenu from '@/app/helpers/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../MusicCard/MusicCard';
import { useParams } from 'next/navigation';
import { Musics } from '@/app/interfaces/item';

interface Data {
    title: string;
    coverImgUrl: string;
    musics: Musics[];
}

const Playlist = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [playlist, setPlaylist] = useState<Musics[]>([]);
    const [data, setData] = useState<Data | null>(null);
    const [photo, setPhoto] = useState<string>('');
    const token = localStorage.getItem('token');
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (token && id) {
            axios
                .get(`https://enigma-wtuc.onrender.com/playlists/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((result) => {
                    setPlaylist(result.data.musics);
                    setPhoto(
                        result.data.musics[result.data.musics.length - 1]
                            .coverImgUrl,
                    );
                    setData(result.data);
                })
                .catch((error) => {
                    console.error('Error fetching playlist:', error);
                });
        } else {
            console.error(
                'No authentication token found or playlist ID missing.',
            );
        }
    }, [token]);

    const handleClick = (item: Musics, index: number) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const allSrc = playlist.map(({ audioUrl, id }) => ({
                audioUrl,
                id,
            }));
            const imageSrc = playlist.map(({ coverImgUrl }) => coverImgUrl);
            const artist = playlist.map(({ artistName }) => artistName);
            const title = playlist.map(({ title }) => title);
            setIsPlaying(true);
            setGlobalId(item.id);
            setImage(imageSrc);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setArtist(artist);
            setTitle(title);
        }
    };

    return (
        <div className={styles.playlistContainer}>
            <div className={styles.photoAndNameCont}>
                <div className={styles.photoAndName}>
                    <img
                        className={styles.photo}
                        src={photo ? photo : '/images/defaultPlaylist.png'}
                        alt="Playlist Cover"
                    />
                    {data && (
                        <>
                            <span className={styles.name}>{data.title}</span>
                        </>
                    )}
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
                        isPlaying={isPlaying && globalMusicId === item.id}
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
