import ChartAlbum from '@/app/Components/ChartAlbum/ChartAlbum';
import styles from './page.module.scss'

const topCharts = () => {

    const charts = [
        {
            id: 1,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024'
        },
        {
            id: 2,
            image: '/images/chartHitsStars.png',
            title: 'Chart Hits Stars'
        },
        {
            id: 3,
            image: '/images/topMusicCharts.png',
            title: 'Top Music Charts'
        },
        {
            id: 4,
            image: '/images/superChartHits.png',
            title: 'Super Chart Hits'
        },
        {
            id: 5,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024'
        },
        {
            id: 6,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024'
        },
        {
            id: 7,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024'
        },
        {
            id: 8,
            image: '/images/topHits2024.png',
            title: 'Top Hits 2024'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.title}>Top Charts</span>
            </div>
            <div className={styles.containerInside}>
                {charts.map((chart) => (
                    <ChartAlbum id={chart.id} image={chart.image} title={chart.title} />
                ))}
            </div>
        </div>
    )
}

export default topCharts;