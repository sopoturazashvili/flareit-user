'use client';

import MusicCard from '@/app/Components/MusicCard/MusicCard';
import styles from './TrendHits.module.scss';
import { isPlayingState, musicGlobalState, musicId } from '@/app/state';
import { useRecoilState } from 'recoil';

const TrendHits = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const hits = [
        {
            id: 17,
            image: '/images/feelIt.png',
            title: 'Feel It',
            artist: 'D4VD',
            src: '/Player/stairway.mp3',
        },
        {
            id: 18,
            image: '/images/slowDown.png',
            title: 'Slow Down',
            artist: 'Selena Gomez',
            src: '/Player/Bellin.mp3',
        },
        {
            id: 19,
            image: '/images/fortnight.png',
            title: 'Fortnight',
            artist: 'Taylor Swift',
            src: '/Player/judas.mp3',
        },
        {
            id: 20,
            image: '/images/lunch.png',
            title: 'Billie Eillish',
            artist: 'Lunch',
            src: '/Player/Bellaire.mp3',
        },
        {
            id: 21,
            image: '/images/noAngels.png',
            title: 'No Angels',
            artist: 'Justin Timberlake',
            src: '/Player/IVdasi.mp3',
        },
        {
            id: 22,
            image: '/images/missMeToo.png',
            title: 'Miss Me Too',
            artist: 'Griff',
            src: '/Player/SoMany.mp3',
        },
        {
            id: 23,
            image: '/images/saturn.png',
            title: 'Saturn',
            artist: 'SZA',
            src: '/Player/Kendrick.mp3',
        },
        {
            id: 24,
            image: '/images/greedy.png',
            title: 'Greedy',
            artist: 'Tata Mcrae',
            src: '/Player/stairway.mp3',
        },
        {
            id: 25,
            image: '/images/madeForMe.png',
            title: 'Made For Me',
            artist: 'Muni Long',
            src: '/Player/Bellin.mp3',
        },
        {
            id: 26,
            image: '/images/wildOnes.png',
            title: 'Wild Ones',
            artist: 'Jessie Murph',
            src: '/Player/judas.mp3',
        },
        {
            id: 27,
            image: '/images/lovinOnMe.png',
            title: 'Lovin On Me',
            artist: 'Jack Harlow',
            src: '/Player/Bellaire.mp3',
        },
        {
            id: 28,
            image: '/images/dontWannaWait.png',
            title: 'Dont Wanna Wait',
            artist: 'David Guetta',
            src: '/Player/IVdasi.mp3',
        },
        {
            id: 29,
            image: '/images/blueOverYou.png',
            title: 'Blue Over You',
            artist: 'Mason Ramsey',
            src: '/Player/SoMany.mp3',
        },
        {
            id: 30,
            image: '/images/makeYouMine.png',
            title: 'Make You Mine',
            artist: 'Madison Beer',
            src: '/Player/Kendrick.mp3',
        },
        {
            id: 31,
            image: '/images/feelingLucky.png',
            title: 'Feeling Lucky',
            artist: 'Bibi&Jackson Wang',
            src: '/Player/stairway.mp3',
        },
        {
            id: 32,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
            src: '/Player/Bellin.mp3',
        },
    ];

    return (
        <div className={styles.container}>
            <span className={styles.title}>Trend Hits</span>
            <div className={styles.containerInside}>
                {hits.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.artist}
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

export default TrendHits;
