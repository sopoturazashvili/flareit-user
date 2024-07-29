'use client';

import MusicCard from '@/app/Components/MusicCard/MusicCard';
import styles from './TrendHits.module.scss';

const TrendHits = () => {
    const hits = [
        {
            id: 1,
            image: '/images/feelIt.png',
            title: 'Feel It',
            artist: 'D4VD',
        },
        {
            id: 2,
            image: '/images/slowDown.png',
            title: 'Slow Down',
            artist: 'Selena Gomez',
        },
        {
            id: 3,
            image: '/images/fortnight.png',
            title: 'Fortnight',
            artist: 'Taylor Swift',
        },
        {
            id: 4,
            image: '/images/lunch.png',
            title: 'Billie Eillish',
            artist: 'Lunch',
        },
        {
            id: 5,
            image: '/images/noAngels.png',
            title: 'No Angels',
            artist: 'Justin Timberlake',
        },
        {
            id: 6,
            image: '/images/missMeToo.png',
            title: 'Miss Me Too',
            artist: 'Griff',
        },
        {
            id: 7,
            image: '/images/saturn.png',
            title: 'Saturn',
            artist: 'SZA',
        },
        {
            id: 8,
            image: '/images/greedy.png',
            title: 'Greedy',
            artist: 'Tata Mcrae',
        },
        {
            id: 9,
            image: '/images/madeForMe.png',
            title: 'Made For Me',
            artist: 'Muni Long',
        },
        {
            id: 10,
            image: '/images/wildOnes.png',
            title: 'Wild Ones',
            artist: 'Jessie Murph',
        },
        {
            id: 11,
            image: '/images/lovinOnMe.png',
            title: 'Lovin On Me',
            artist: 'Jack Harlow',
        },
        {
            id: 12,
            image: '/images/dontWannaWait.png',
            title: 'Dont Wanna Wait',
            artist: 'David Guetta',
        },
        {
            id: 13,
            image: '/images/blueOverYou.png',
            title: 'Blue Over You',
            artist: 'Mason Ramsey',
        },
        {
            id: 14,
            image: '/images/makeYouMine.png',
            title: 'Make You Mine',
            artist: 'Madison Beer',
        },
        {
            id: 15,
            image: '/images/feelingLucky.png',
            title: 'Feeling Lucky',
            artist: 'Bibi&Jackson Wang',
        },
        {
            id: 16,
            image: '/images/cruelSummer.png',
            title: 'Cruel Summer',
            artist: 'Taylor Swift',
        },
    ];

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Trend Hits</span>
            </div>
            <div className={styles.containerInside}>
                {hits.map((item) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.artist}
                        deleteOrLike={false}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrendHits;
