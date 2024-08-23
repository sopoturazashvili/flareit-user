import React, { useEffect, useState } from 'react';
import styles from './TrendHitsCard.module.scss';
import FillAndTextButton from '../FillButton/FillAndTextButton';
import { useMediaQuery } from 'react-responsive';

interface Item {
    id: number;
    backgroundImage: string;
    title: string;
}

const TrendHitsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            backgroundImage: '/images/trendhits_blue.jpeg',
            title: 'trend hits',
        },
        {
            id: 2,
            backgroundImage: '/images/trendhits_red.jpeg',
            title: 'most liked',
        },
        {
            id: 3,
            backgroundImage: '/images/trendhits_green.jpeg',
            title: 'new arrivals',
        },
    ]);

    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 599 });

    useEffect(() => {
        const tabletItems = [
            {
                id: 1,
                backgroundImage: '/images/trendhits_blue_tablet.jpeg',
                title: 'trend hits',
            },
            {
                id: 2,
                backgroundImage: '/images/trendhits_red_tablet.jpeg',
                title: 'most liked',
            },
            {
                id: 3,
                backgroundImage: '/images/trendhits_green_tablet.jpeg',
                title: 'new arrivals',
            },
        ];

        const mobileItems = [
            {
                id: 1,
                backgroundImage: '/images/trendhits_blue_mobile.jpeg',
                title: 'trend hits',
            },
            {
                id: 2,
                backgroundImage: '/images/trendhits_red_mobile.jpeg',
                title: 'most liked',
            },
            {
                id: 3,
                backgroundImage: '/images/trendhits_green_mobile.jpeg',
                title: 'new arrivals',
            },
        ];

        if (isMobile) {
            setItems(mobileItems);
        } else if (isTablet) {
            setItems(tabletItems);
        }
    }, [isTablet, isMobile]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [items.length]);

    const currentItem = items[currentIndex];
    const bgStyles = {
        backgroundImage: `url(${currentItem.backgroundImage})`,
        width: '100%',
        height: 'auto',
    };

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
