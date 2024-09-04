import Link from 'next/link';
import Image from 'next/image';
import styles from './SearchItemAuthor.module.scss';

interface Props {
    id: number;
    artistName: string;
    onClick: () => void;
    coverImgUrl: string;
}

const SearchItemAuthor = (props: Props) => {
    return (
        <Link
            key={props.id}
            className={styles.mapContainer}
            href={`/artists/${props.id}`}
            onClick={props.onClick}
        >
            <Image
                className={styles.square}
                src={props.coverImgUrl}
                width={24}
                height={24}
                alt="Icon"
            />
            <span className={styles.searchAndMapText}>{props.artistName}</span>
        </Link>
    );
};

export default SearchItemAuthor;
