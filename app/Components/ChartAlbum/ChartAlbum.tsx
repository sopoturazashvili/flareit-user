import Link from "next/link";
import styles from "./ChartAlbum.module.scss";
import Image from "next/image";

interface Props {
  id: number;
  image: string;
  title: string;
}

const ChartAlbum = (props: Props) => {
  return (
    <Link href={`/page${props.id}`}>
      <div className={styles.albumChartContainer}>
        <div className={styles.albumChart}>
          <Image src={props.image} width={144} height={165} alt="Chart album" />
          <p className={styles.albumHits}>{props.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChartAlbum;
