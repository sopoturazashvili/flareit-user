import MusicListItem from '@/app/Components/MusicListItem/MusicListItem';
import styles from './MusicList.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import axios from 'axios';

interface musicListitem {
    title: string;
    coverImgUrl: string;
    audioUrl: string;
    artistName: string;
    id: number;
    songDuration: string;
}

const MusicList = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [, setGlobalId] = useRecoilState(musicId);
    const [, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [musicList, setMusicList] = useState<musicListitem[]>([]);
    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics/shuffle')
            .then((res) => {
                setMusicList(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);
    const handleClick = (
        item: {
            image?: string;
            songTitle?: string;
            artistName?: string;
            songDuration?: string;
            src?: string;
            id: number;
        },
        index: number,
    ) => {
        const allSrc = musicList.map((item) => ({
            audioUrl: item.audioUrl,
            id: item.id,
        }));
        const imageSrc = musicList.map((item) => item.coverImgUrl);
        const artist = musicList.map((item) => item.artistName);
        const title = musicList.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };
    const [musicUp, setMusicUp] = useState(false);

    const musicUpFunc = () => {
        setMusicUp(!musicUp);
    };

    return (
        <div className={styles.musicList}>
            <div
                className={styles.musicListBackground}
                style={{
                    transform: musicUp ? 'translateY(0%)' : 'translateY(0%)',
                }}
            >
                <div
                    className={`${styles.imageContainer} ${
                        musicUp ? styles.rotateUp : ''
                    }`}
                    onClick={musicUpFunc}
                >
                    {musicUp ? (
                        <img
                            src="/PlayerControler/MusicDown.svg"
                            alt="MusicDown"
                        />
                    ) : (
                        <img src="/PlayerControler/MusicUp.svg" alt="MusicUp" />
                    )}
                </div>
                <div className={styles.nameAndMusic}>
                    <p className={styles.nextContainer}>Next Play</p>
                    <div className={styles.musicListItem}>
                        {musicList
                            .slice(0, musicUp ? 6 : 0)
                            .map((item, index) => (
                                <MusicListItem
                                    id={index}
                                    key={item.id}
                                    image={item.coverImgUrl}
                                    songTitle={item.title}
                                    artistName={item.artistName}
                                    songDuration={item.songDuration}
                                    onClick={() => {
                                        handleClick(item, index);
                                    }}
                                    index={index}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;
