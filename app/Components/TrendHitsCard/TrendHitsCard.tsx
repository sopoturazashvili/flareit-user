import { useEffect, useState } from 'react';
import styles from './TrendHitsCard.module.scss';
import FillAndTextButton from '../FillButton/FillAndTextButton';

const TrendHitsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            id: 1,
            backgroundImage: '/images/trendhits_blue.jpeg',
            title1: 'Top',
            title2: 'Charts',
        },
        {
            id: 2,
            backgroundImage: '/images/trendhits_green.jpeg',
            title1: 'Popular',
            title2: 'Songs',
        },
        {
            id: 3,
            backgroundImage: '/images/trendhits_red.jpeg',
            title1: 'Trending',
            title2: 'Now',
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 99999999999);

        return () => clearInterval(intervalId);
    }, [items.length]);

    const currentItem = items[currentIndex];
    const bgStyles = {
        backgroundImage: `url(${currentItem.backgroundImage})`,
        backgroundSize: 'cover', // or 'contain'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%', // Ensure the height is set
    };

    return (
        <div className={styles.container} style={bgStyles}>
            <div className={styles.trendHitsContrainer}>
                <div className={styles.titles}>
                    <span className={styles.text}>{currentItem.title1}</span>
                    <span className={styles.textHits}>
                        {currentItem.title2}
                    </span>
                </div>
                <div className={styles.fillTextButton}>
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
