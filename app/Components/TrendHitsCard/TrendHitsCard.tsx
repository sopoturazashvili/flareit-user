import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './TrendHitsCard.module.scss';
import FillAndTextButton from '../FillButton/FillAndTextButton';
import { trendHitsItems, tabletItems, mobileItems } from '@/app/utils/items';

const TrendHitsCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599 });
    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1023 });

    const items = isMobile
        ? mobileItems
        : isTablet
          ? tabletItems
          : trendHitsItems;

    useEffect(() => {
        setLoadedImages(Array(items.length).fill(false));
        items.forEach((item, index) => {
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
    }, [items]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [items]);

    const currentItem = items[currentIndex];
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
            <div className={styles.trendHitsContainer}>
                <div className={styles.titleContainer}>
                    <span className={styles.titles}>weekly hits</span>
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
