import Link from 'next/link';
import styles from './ChartCard.module.scss';

interface Props {
    id: number;
    image: string;
    title: string;
}

const ChartCard = (props: Props) => {
    return (
        <Link href={`/topcharts/${props.id}`}>
            <div className={styles.albumChartContainer}>
                <div className={styles.albumChart}>
                    <img
                        className={styles.image}
                        src={props.image}
                        alt="Chart album"
                    />
                    <div className={styles.titleContainer}>
                        <p className={styles.albumHits}>{props.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ChartCard;
