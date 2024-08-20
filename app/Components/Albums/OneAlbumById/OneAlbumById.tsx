'use client';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneAlbumById.module.scss';
import { useRecoilState } from 'recoil';

const OneAlbumById = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const data = [
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 33,
            src: '/Player/stairway.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 34,
            src: '/Player/Bellin.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 35,
            src: '/Player/judas.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 36,
            src: '/Player/Bellaire.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 37,
            src: '/Player/IVdasi.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 38,
            src: '/Player/SoMany.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 39,
            src: '/Player/Kendrick.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 40,
            src: '/Player/stairway.mp3',
        },
    ];

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
        const allSrc = data.map((item) => item.src);
        const imageSrc = data.map((item) => item.image);
        const artist = data.map((item) => item.temeName);
        const title = data.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };
    return (
        <div className={styles.OneAlbumByIdContainer}>
            <div>
                <div className={styles.photoContainer}>
                    <img src="/images/OneAlbumPhoto.svg" alt="OneAlbumPhoto" />
                    <div className={styles.nameContainer}>
                        <span className={styles.musicName}>Lovers</span>
                        <span className={styles.artistName}>Taylor Swift</span>
                    </div>
                </div>
            </div>
            <div className={styles.musicCard}>
                {data.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.temeName}
                        id={item.id}
                        deleteOrLike={false}
                        isPlaying={isPlaying && globalMusicId === index}
                        onClick={() => handleClick(item, index)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default OneAlbumById;
