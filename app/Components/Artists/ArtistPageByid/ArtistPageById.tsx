'use client';
import { useParams } from 'next/navigation';
import AlbumCard from '../../AlbumCard/AlbumCard';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './ArtistPageById.module.scss';

const ArtistPageById = () => {
    const id = useParams();
    console.log(id);
    const data = [
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 1,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 2,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 3,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 4,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 5,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 6,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 7,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 8,
        },
    ];

    const albumsData = [
        {
            id: 1,
            artistName: 'Gunna',
            albumName: 'one of wun',
            year: '2019',
            image: '/images/guna.png',
        },
        {
            id: 2,
            artistName: 'Morgan Wallen',
            albumName: 'Dangerous',
            year: '2000',
            image: '/images/dangerous.png',
        },
        {
            id: 3,
            artistName: 'Twenty one pilot',
            albumName: 'Clancy',
            year: '2000',
            image: '/images/clancy.png',
        },
        {
            id: 4,
            artistName: 'Billie Eillish',
            albumName: 'Hit me hard...',
            year: '2005',
            image: '/images/billie.png',
        },
        {
            id: 5,
            artistName: 'Olivia Rodrigo',
            albumName: 'Guts',
            year: '2000',
            image: '/images/taylorSwift.png',
        },
        {
            id: 6,
            artistName: 'Taylor Swift',
            albumName: '1989',
            year: '1989',
            image: '/images/1989.png',
        },
        {
            id: 7,
            artistName: 'SZA',
            albumName: 'SOS',
            year: '2009',
            image: '/images/sza.png',
        },
        {
            id: 8,
            artistName: 'Taylor Swift',
            albumName: 'Lover',
            year: '2001',
            image: '/images/lover.png',
        },
    ];
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.pathName}>Coldplay</p>
            </div>
            <div className={styles.nameAndPhoto}>
                <img
                    className={styles.photo}
                    src="/images/artistById.svg"
                    alt="artistById"
                />
                <p className={styles.nameColor}>Coldplay</p>
                <p className={styles.biografiContainer}>
                    Coldplayare a Britishrockband formed inLondonin 1997,
                    consisting of vocalist and pianistChris Martin, lead
                    guitaristJonny Buckland, bassistGuy Berryman, drummer and
                    percussionistWill Champion, and managerPhil Harvey.[a]They
                    are best known fortheir live performances,[3]having
                    alsoimpacted popular culturewiththeir
                    artistry,advocacyandachievements. The members of the band
                    initially met atUniversity College London, calling
                    themselves Big Fat Noises and changing to Starfish, before
                    settling on the current name. After releasingSafety(1998)
                    independently, Coldplay signed withParlophonein 1999 and
                    wrote their debut album,Parachutes(2000). It featured
                    breakthrough single // eslint-disable-next-line,
                    react/no-unescaped-entities react/no-unescaped-entities
                    Yellow and received aBrit Award for British Album of the
                    Yearand aGrammy Award for Best Alternative Music Album. The
                    groups follow-up,A Rush of Blood to the Head(2002), won the
                    same accolades.
                </p>
            </div>
            <div className={styles.musicCard}>
                {data.map((itme) => (
                    <MusicCard
                        key={itme.id}
                        image={itme.image}
                        title={itme.title}
                        teamName={itme.temeName}
                        deleteOrLike={false}
                        id={itme.id}
                    />
                ))}
            </div>
            <div className={styles.albumContainer}>
                <p className={styles.albumsCont}>Albums</p>
                <div className={styles.albumMapContainer}>
                    {albumsData.map((item) => (
                        <AlbumCard
                            key={item.id}
                            image={item.image}
                            albumName={item.albumName}
                            year={item.year}
                            artistName={item.artistName}
                            id={item.id}
                            pagePathName={'albums'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistPageById;
