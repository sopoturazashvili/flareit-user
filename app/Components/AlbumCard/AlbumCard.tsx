import styles from "./AlbumCard.module.scss";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

interface Props {
  image: string;
  albumName: string;
  year: string;
  artistName: string;
  id: number;
  pagePathName: string;
}

const AlbumCard = (props: Props) => {
  return (
    <Link href={`/${props.pagePathName}/${props.id}`}>
      <div className={styles.container}>
        <div className={styles.coverContainer}>
          <Image src={props.image} width={144} height={144} alt="Album Cover" />
        </div>
        <div>
          <div className={styles.infoContainer}>
            <h4>{props.albumName}</h4>
            <span className={styles.albumText}>{props.year}</span>
          </div>
          <div>
            <span className={styles.artistName}>{props.artistName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
