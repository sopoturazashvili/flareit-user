import React, { useEffect, useState } from 'react';
import styles from './TrendHitsCard.module.scss';
import FillAndTextButton from '../FillButton/FillAndTextButton';
import { useMediaQuery } from 'react-responsive';

const TrendHitsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
    const isTablet = useMediaQuery({
        query: '(min-width: 600px) and (max-width: 1023px)',
    });

    const items = [
        {
            id: 1,
            backgroundImage: '/images/trendhits_blue.jpeg',
            title1: 'trend',
            title2: 'hits',
            title1FontWeb: '53px',
            title2FontWeb: '76px',
            title1FontTablet: '48px',
            title2FontTablet: '68px',
            title1FontMobile: '34px',
            title2FontMobile: '47px',
        },
        {
            id: 2,
            backgroundImage: '/images/trendhits_red.jpeg',
            title1: 'most',
            title2: 'liked',
            title1FontWeb: '58px',
            title2FontWeb: '62px',
            title1FontTablet: '52px',
            title2FontTablet: '56px',
            title1FontMobile: '36px',
            title2FontMobile: '38px',
        },
        {
            id: 3,
            backgroundImage: '/images/trendhits_green.jpeg',
            title1: 'new',
            title2: 'arrivals',
            title1FontWeb: '74px',
            title2FontWeb: '34px',
            title1FontTablet: '66px',
            title2FontTablet: '30px',
            title1FontMobile: '47px',
            title2FontMobile: '22px',
        },
    ];

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

    let title1;
    let title2;

    if (isMobile) {
        title1 = {
            fontSize: `${currentItem.title1FontMobile}`,
        };

        title2 = {
            fontSize: `${currentItem.title2FontMobile}`,
        };
    } else if (isTablet) {
        title1 = {
            fontSize: `${currentItem.title1FontTablet}`,
        };

        title2 = {
            fontSize: `${currentItem.title2FontTablet}`,
        };
    } else {
        title1 = {
            fontSize: `${currentItem.title1FontWeb}`,
        };

        title2 = {
            fontSize: `${currentItem.title2FontWeb}`,
        };
    }

    return (
        <div className={styles.container} style={bgStyles}>
            <div className={styles.trendHitsContrainer}>
                <div className={styles.titles}>
                    <span style={title1} className={styles.title}>
                        {currentItem.title1}
                    </span>
                    <span style={title2} className={styles.title}>
                        {currentItem.title2}
                    </span>
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
