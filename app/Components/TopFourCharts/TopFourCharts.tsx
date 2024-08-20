import ChartCard from '../ChartCard/ChartCard';

const TopFourCharts = () => {
    const data = [
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
    ];
    return (
        <>
            {data.map((item) => (
                <ChartCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                />
            ))}
        </>
    );
};

export default TopFourCharts;
