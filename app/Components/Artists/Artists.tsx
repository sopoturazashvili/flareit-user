import ArtistPlaylistItem from '../ArtistPlaylistListItem/ArtistPlaylistItem';
import styles from './Artists.module.scss';

const Artists = () => {
    const artists = [
        {
            id: 1,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 2,
            name: 'Beyonce',
            image: '/images/beyonce.svg',
        },
        {
            id: 3,
            name: 'Ed Sheeran',
            image: '/images/edSheeran.svg',
        },
        {
            id: 4,
            name: 'Taylor Swift',
            image: '/images/taylor.svg',
        },
        {
            id: 5,
            name: 'Ariana Grande',
            image: '/images/ariana.svg',
        },
        {
            id: 6,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 7,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 8,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 9,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 10,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 11,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 12,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 13,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 14,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 15,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 16,
            name: 'Sia',
            image: '/images/sia.svg',
        },
        {
            id: 17,
            name: 'Sia',
            image: '/images/sia.svg',
        },
    ];

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Artists</span>
            </div>
            <div className={styles.list}>
                {artists.map((artist) => (
                    <ArtistPlaylistItem
                        key={artist.id}
                        image={artist.image}
                        text={artist.name}
                        imageRound={true}
                        pathName={`/artists/${artist.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Artists;
