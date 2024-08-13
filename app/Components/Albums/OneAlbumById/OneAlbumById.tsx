'use client';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneAlbumById.module.scss';

const OneAlbumById = () => {
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
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 9,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 10,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 11,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 12,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 13,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 14,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 15,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 16,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 17,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 18,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 19,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 20,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 21,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 22,
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
                {data.map((item) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.temeName}
                        id={item.id}
                        deleteOrLike={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default OneAlbumById;
