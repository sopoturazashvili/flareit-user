import { useEffect, useState } from 'react';
import ChartCard from '../ChartCard/ChartCard';
import { TopChartsInter } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';

const TopFourCharts = () => {
    const [topCharts, setTopCharts] = useState<TopChartsInter[]>([]);
    useEffect(() => {
        apiInstance.get('/topcharts').then((result) => {
            setTopCharts(result.data);
        });
    }, []);
    return (
        <>
            {topCharts.map((item) => (
                <ChartCard
                    key={item.id}
                    id={item.id}
                    image={item.coverImgUrl}
                    title={item.title}
                />
            ))}
        </>
    );
};

export default TopFourCharts;
