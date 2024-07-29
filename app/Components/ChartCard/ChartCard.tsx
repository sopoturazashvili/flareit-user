import Link from 'next/link';
import styles from './ChartCard.module.scss';

interface Props {
    id: number;
    image: string;
    title: string;
}

const ChartCard = (props: Props) => {
    return (
        <Link href={`/page${props.id}`}>
            <div className={styles.albumChartContainer}>
                <div className={styles.albumChart}>
                    <img
                        className={styles.image}
                        src={props.image}
                        alt="Chart album"
                    />
                    <p className={styles.albumHits}>{props.title}</p>
                </div>
            </div>
        </Link>
    );
};

export default ChartCard;
