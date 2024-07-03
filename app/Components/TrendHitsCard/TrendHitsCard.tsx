'use client'

import { useEffect, useState } from 'react';
import styles from './TrendHitsCard.module.scss'

const TrendHitsCard = () => {

    const [currentClassIndex, setCurrentClassIndex] = useState(0);
    const classes = [styles.billie, styles.harry, styles.boys];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentClassIndex(prevIndex => (prevIndex + 1) % classes.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`${styles.container} ${classes[currentClassIndex]}`}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.text}>Trend Hits</h2>
                    <h1 className={styles.year}>2024</h1>
                </div>
                
            </div>
        </div>
    )
}

export default TrendHitsCard