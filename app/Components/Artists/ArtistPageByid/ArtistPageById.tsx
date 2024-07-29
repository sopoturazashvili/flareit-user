'use client';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './ArtistPageById.module.scss';

const ArtistPageById = () => {
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
                    Coldplay are a British rock band formed in London in 1997,
                    consisting of vocalist and pianistChris Martin, lead
                    guitarist Jonny Buckland, bassist Guy Berryman, drummer and
                    percussionist Will Champion, and manager Phil
                    Harvey.[a] They are best known for their live
                    performances,[3] having also impacted popular
                    culture with their artistry, advocacy and achievements. The
                    members of the band initially met at University College
                    London, calling themselves Big Fat Noises and changing to
                    Starfish, before settling on the current name. After
                    releasing Safety (1998) independently, Coldplay signed
                    with Parlophone in 1999 and wrote their debut
                    album, Parachutes (2000). It featured breakthrough single //
                    eslint-disable-next-line react/no-unescaped-entities
                    "Yellow" and received a Brit Award for British Album of the
                    Year and a Grammy Award for Best Alternative Music Album.
                    The group's follow-up, A Rush of Blood to the Head (2002),
                    won the same accolades.
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
        </div>
    );
};

export default ArtistPageById;
