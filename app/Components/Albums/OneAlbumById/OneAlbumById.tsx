'use client';
import { isPlayingState, musicGlobalState, musicId } from '@/app/state';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneAlbumById.module.scss';
import { useRecoilState } from 'recoil';
import { Itim } from 'next/font/google';

const OneAlbumById = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
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
                        onClick={() => {
                            setIsPlaying(true);
                            setGlobalId(item.id);
                            setGlobalsrc(item.src);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default OneAlbumById;
