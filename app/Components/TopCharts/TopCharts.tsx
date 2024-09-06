'use client';
import { useEffect, useState } from 'react';
import ChartCard from '../ChartCard/ChartCard';
import styles from './TopCharts.module.scss';
import axios from 'axios';
import { TopChartsInter } from '@/app/interfaces/item';

const TopCharts = () => {
    const [topCharts, setTopCharts] = useState<TopChartsInter[]>([]);
    const token = localStorage.getItem('token');
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
