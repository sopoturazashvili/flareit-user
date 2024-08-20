import ChartCard from '../ChartCard/ChartCard';
import styles from './TopCharts.module.scss';

const TopCharts = () => {
    const charts = [
        {
            id: 1,
            image: '/images/topHits.png',
            title: 'Top Hits 2024',
        },
        {
            id: 2,
            image: '/images/chartHitsStars.png',
            title: 'Chart Hits Stars',
        },
        {
            id: 3,
            image: '/images/topMusicCharts.png',
            title: 'Top Music Charts',
        },
        {
            id: 4,
            image: '/images/superChartHits.png',
            title: 'Super Chart Hits',
        },
        {
            id: 5,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 6,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 7,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 9,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 10,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 11,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 12,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 13,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 14,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 15,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 16,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 17,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 18,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
        {
            id: 19,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024',
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.title}>Top Charts</span>
            </div>
            <div className={styles.containerInside}>
                {charts.map((chart) => (
                    <ChartCard
                        key={chart.id}
                        id={chart.id}
                        image={chart.image}
                        title={chart.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCharts;
