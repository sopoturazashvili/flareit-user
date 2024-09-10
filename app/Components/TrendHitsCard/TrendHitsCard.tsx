import React, { useEffect, useState } from 'react';
import styles from './TrendHitsCard.module.scss';
import FillAndTextButton from '../FillButton/FillAndTextButton';
import { trendHitsItems } from '@/app/utils/items';

const TrendHitsCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

    useEffect(() => {
        trendHitsItems.forEach((item, index) => {
            const img = new Image();
            img.src = item.backgroundImage;
            img.onload = () => {
                setLoadedImages((prevLoadedImages) => {
                    const newLoadedImages = [...prevLoadedImages];
                    newLoadedImages[index] = true;
                    return newLoadedImages;
                });
            };
        });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % trendHitsItems.length,
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const currentItem = trendHitsItems[currentIndex];
    const bgStyles = {
        backgroundImage: '/images/trendhits_blue.jpeg',
        backgroundColor: '#333',
        width: '100%',
        height: 'auto',
    };

    if (loadedImages[currentIndex]) {
        bgStyles.backgroundImage = `url(${currentItem.backgroundImage})`;
    }
    return (
        <div className={styles.container} style={bgStyles}>
            <div className={styles.trendHitsContrainer}>
                <div className={styles.titleContainer}>
                    <span className={styles.titles}>{currentItem.title}</span>
                </div>
                <div className={styles.button}>
                    <FillAndTextButton
                        text={'View playlist'}
                        fill={true}
                        href={'/trendhits'}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrendHitsCard;
