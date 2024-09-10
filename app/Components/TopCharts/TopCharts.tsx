'use client';
import { useEffect, useState } from 'react';
import ChartCard from '../ChartCard/ChartCard';
import styles from './TopCharts.module.scss';
import { TopChartsInter } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';

const TopCharts = () => {
    const [topCharts, setTopCharts] = useState<TopChartsInter[]>([]);
    useEffect(() => {
        apiInstance.get('/topcharts').then((result) => {
            setTopCharts(result.data);
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.title}>Top Charts</span>
            </div>
            <div className={styles.list}>
                {topCharts.map((chart) => (
                    <ChartCard
                        key={chart.id}
                        id={chart.id}
                        image={chart.coverImgUrl}
                        title={chart.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCharts;
