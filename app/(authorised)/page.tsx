'use client';

import { useRouter } from 'next/navigation';
import SectionHeader from '../Components/SectionHeader/SectionHeader';
import TopFourAlbums from '../Components/TopFourAlbums/TopFourAlbums';
import TopFourArtist from '../Components/TopFourArtist/TopFourArtist';
import TopFourCharts from '../Components/TopFourCharts/TopFourCharts';
import TopFourHits from '../Components/TopFourHits/TopFourHits';
import TrendHitsCard from '../Components/TrendHitsCard/TrendHitsCard';
import styles from './page.module.scss';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('../authpage');
        }
    }, [router]);

    return (
        <main className={styles.main}>
            <div>
                <TrendHitsCard />
            </div>
            <div className={styles.sectionHeader}>
                <SectionHeader title={'Popular Artists'} href={'topartists'} />
                <div className={styles.artistCard}>
                    <TopFourArtist />
                </div>
            </div>
            <div className={styles.sectionHeader}>
                <SectionHeader title={'Top Charts'} href={'topcharts'} />
                <div className={styles.artistCard}>
                    <TopFourCharts />
                </div>
            </div>
            <div className={styles.sectionHeader}>
                <SectionHeader title={'Top Hits'} href={'tophits'} />
                <div className={styles.hitsContainer}>
                    <TopFourHits />
                </div>
            </div>
            <div className={styles.sectionHeader}>
                <SectionHeader title={'Top Albums'} href={'topalbums'} />
                <div className={styles.artistCard}>
                    <TopFourAlbums pagePathName={'topalbums'} />
                </div>
            </div>
        </main>
    );
}
