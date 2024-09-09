import { useEffect, useState } from 'react';
import ChartCard from '../ChartCard/ChartCard';
import axios from 'axios';
import { TopChartsInter } from '@/app/interfaces/item';

const TopFourCharts = () => {
    const [topCharts, setTopCharts] = useState<TopChartsInter[]>([]);
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/topcharts', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((result) => {
                setTopCharts(result.data);
            });
    }, [token]);
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
