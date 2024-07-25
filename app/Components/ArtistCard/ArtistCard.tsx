import Link from "next/link";
import styles from "./ArtistCard.module.scss";
import Image from "next/image";

interface Props {
  image: string;
  artist: string;
  year: string;
  id: number;
}

const ArtistCard = (props: Props) => {
  return (
    <Link href={`/page/${props.id}`}>
      <div className={styles.container}>
        <div className={styles.containerCenter}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={props.image}
              alt="Artist Card"
            />
          </div>
          <div className={styles.infoContainer}>
            <h4>{props.artist}</h4>
            <h5 className={styles.infoNumb}>{props.year}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
