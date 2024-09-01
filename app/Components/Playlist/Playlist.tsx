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

interface Props {
    image: string;
}

interface playlistId {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
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
    const [playlistId, setPlaylistId] = useState<playlistId[]>([]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics/tophits')
            .then((result) => {
                setPlaylistId(result.data);
            })
            .catch((error) => {
                console.error('Error fetching music data:', error);
            });
    }, []);

    const handleClick = (
        item: {
            image?: string;
            title?: string;
            temeName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        const allSrc = playlistId.map((item) => item.audioUrl);
        const imageSrc = playlistId.map((item) => item.coverImgUrl);
        const artist = playlistId.map((item) => item.title);
        const title = playlistId.map((item) => item.title);
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
                {playlistId.map((item, index) => (
                    <MusicCard
                        id={item.id}
                        key={item.id}
                        image={item.coverImgUrl}
                        title={item.title}
                        teamName={item.title}
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
