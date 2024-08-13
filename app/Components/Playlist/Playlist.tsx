import MusicCard from '../MusicCard/MusicCard';
import styles from './Playlist.module.scss';

interface Props {
    image: string;
}

const Playlist = (props: Props) => {
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
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 23,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 24,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 25,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 26,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 27,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 28,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 29,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 30,
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 31,
        },
    ];
    return (
        <div className={styles.PlaylistContainer}>
            <div className={styles.photoAndNameCont}>
                <div className={styles.photoAndName}>
                    <img src={props.image} />
                    <span className={styles.name}>My Everyday</span>
                </div>
            </div>
            <div className={styles.topFourHits}>
                {data.map((item) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.temeName}
                        deleteOrLike={true}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlist;
