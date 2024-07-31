import { useParams } from 'next/navigation';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './OneChartById.module.scss';

const OneChartById = () => {
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
    return (
        <div className={styles.OneChartById}>
            <div className={styles.pathContainer}>
                <p className={styles.pathColor}>Top hits in 2024</p>
            </div>
            <div className={styles.oneMusicCard}>
                {data.map((item) => (
                    <MusicCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.temeName}
                        deleteOrLike={false}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default OneChartById;
