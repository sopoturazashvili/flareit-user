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
import MusicCard from '../MusicCard/MusicCard';
import styles from './TopHits.module.scss';
import { useRecoilState } from 'recoil';

const TopHits = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);

    const data = [
        {
            id: 1,
            image: '/images/feelIt.png',
            title: 'Feel It',
            artist: 'D4VD',
            src: '/Player/2Pac.mp3',
        },
        {
            id: 2,
            image: '/images/slowDown.png',
            title: 'Slow Down',
            artist: 'Selena Gomez',
            src: '/Player/Bellin.mp3',
        },
        {
            id: 3,
            image: '/images/fortnight.png',
            title: 'Fortnight',
            artist: 'Taylor Swift',
            src: '/Player/2Pac.mp3',
        },
        {
            id: 4,
            image: '/images/lunch.png',
            title: 'Billie Eillish',
            artist: 'Lunch',
            src: '/Player/Bellaire.mp3',
        },
        {
            id: 5,
            image: '/images/noAngels.png',
            title: 'No Angels',
            artist: 'Justin Timberlake',
            src: '/Player/IVdasi.mp3',
        },
        {
            id: 6,
            image: '/images/missMeToo.png',
            title: 'Miss Me Too',
            artist: 'Griff',
            src: '/Player/SoMany.mp3',
        },
        {
            id: 7,
            image: '/images/saturn.png',
            title: 'Saturn',
            artist: 'SZA',
            src: '/Player/Kendrick.mp3',
        },
        {
            id: 8,
            image: '/images/greedy.png',
            title: 'Greedy',
            artist: 'Tata Mcrae',
            src: '/Player/stairway.mp3',
        },
        {
            id: 9,
            image: '/images/madeForMe.png',
            title: 'Made For Me',
            artist: 'Muni Long',
            src: '/Player/2Pac.mp3',
        },
        {
            id: 10,
            image: '/images/wildOnes.png',
            title: 'Wild Ones',
            artist: 'Jessie Murph',
            src: '/Player/2Pac.mp3',
        },
        {
            id: 11,
            image: '/images/lovinOnMe.png',
            title: 'Lovin On Me',
            artist: 'Jack Harlow',
            src: '/Player/Bellaire.mp3',
        },
        {
            id: 12,
            image: '/images/dontWannaWait.png',
            title: 'Dont Wanna Wait',
            artist: 'David Guetta',
            src: '/Player/IVdasi.mp3',
        },
        {
            id: 13,
            image: '/images/blueOverYou.png',
            title: 'Blue Over You',
            artist: 'Mason Ramsey',
            src: '/Player/SoMany.mp3',
        },
        {
            id: 14,
            image: '/images/makeYouMine.png',
            title: 'Make You Mine',
            artist: 'Madison Beer',
            src: '/Player/Kendrick.mp3',
        },
        {
            id: 15,
            image: '/images/feelingLucky.png',
            title: 'Feeling Lucky',
            artist: 'Bibi&Jackson Wang',
            src: '/Player/stairway.mp3',
        },
        {
            id: 16,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
            src: '/Player/Bellin.mp3',
        },
        {
            id: 17,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
        {
            id: 18,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
        {
            id: 19,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
        {
            id: 20,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
        {
            id: 21,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
        {
            id: 22,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
    ];
    const handleClick = (
        item: {
            id: number;
            image?: string;
            title?: string;
            artist?: string;
            src?: string;
        },
        index: number,
    ) => {
        const allSrc = data.map((item) => item.src);
        const imageSrc = data.map((item) => item.image);
        const artist = data.map((item) => item.artist);
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
        <div className={styles.container}>
            <span className={styles.title}>Top Hits</span>
            <div className={styles.musicCardContainer}>
                {data.map((item, index) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.artist}
                        deleteOrLike={false}
                        id={item.id}
                        isPlaying={isPlaying && globalMusicId === index}
                        onClick={() => handleClick(item, index)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopHits;
