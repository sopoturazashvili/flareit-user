import { useEffect, useState } from 'react';
import styles from './TrendHitsCard.module.scss'

const TrendHitsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            id: 1,
            backgroundColor: 'linear-gradient(270deg, #5E4BE2 36.76%, #34297C 94.73%)',
            backgroundImage: '/images/billieEilish.svg'
        },
        {
            id: 2,
            backgroundColor: 'linear-gradient(270deg, #E2934B 7.1%, #D3620F 94.73%)',
            backgroundImage: '/images/harryStyles.png'
        },
        {
            id: 3,
            backgroundColor: 'linear-gradient(270deg, #E24BD3 25.06%, #4E0FD3 94.73%)',
            backgroundImage: '/images/boysGroup.png'
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [items.length]);

    const currentItem = items[currentIndex];
    const bgStyles = { backgroundImage: `url(${currentItem.backgroundImage})`, backgroundSize:'cover', backgroundPosition:'center' };

    return (
        <div className={styles.container} style={{ background: currentItem.backgroundColor }}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.text}>Trend Hits</h2>
                    <h1 className={styles.year}>2024</h1>
                </div>
            </div>
            <div className={styles.forBgImage} style={bgStyles}></div>
        </div>
    )
}

export default TrendHitsCard