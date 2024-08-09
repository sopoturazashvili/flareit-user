'use client';
import { useParams } from 'next/navigation';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneChartById.module.scss';
import { isPlayingState, musicGlobalState, musicId } from '@/app/state';
import { useRecoilState } from 'recoil';

const OneChartById = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const id = useParams();
    console.log(id);
    const data = [
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 41,
            src: '/Player/stairway.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 42,
            src: '/Player/Bellin.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 43,
            src: '/Player/judas.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 44,
            src: '/Player/Bellaire.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 45,
            src: '/Player/IVdasi.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 46,
            src: '/Player/SoMany.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 47,
            src: '/Player/Kendrick.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 48,
            src: '/Player/stairway.mp3',
        },
    ];
    return (
        <div className={styles.OneChartById}>
            <div className={styles.pathContainer}>
                <p className={styles.pathColor}>Top hits in 2024</p>
            </div>
            <div className={styles.oneMusicCard}>
                {data.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.temeName}
                        deleteOrLike={false}
                        id={item.id}
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

export default OneChartById;
