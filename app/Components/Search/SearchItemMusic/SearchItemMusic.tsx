import Image from 'next/image';
import styles from './SearchItemMusic.module.scss';

interface Props {
    id: number;
    title: string | undefined;
    artistName: string;
    coverImgUrl: string;
    onClick: () => void;
    audioUrl: string | undefined;
}

const SearchItemMusic = (props: Props) => {
    return (
        <div className={styles.mapContainer} onClick={props.onClick}>
            <Image
                className={styles.itemImg}
                src={props.coverImgUrl}
                width={24}
                height={24}
                alt="Icon"
            />
            <div className={styles.textContainer}>
                <span className={styles.searchAndMapText}>{props.title}</span>
                <div className={styles.searchAndMapText2}>
                    {props.artistName}
                    <span className={styles.type}>~Song</span>
                </div>
            </div>
        </div>
    );
};

export default SearchItemMusic;
