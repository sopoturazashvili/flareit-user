import styles from './MusicListItem.module.scss';
import Image from 'next/image';

interface Props {
    id: number;
    image: string;
    songTitle: string;
    artistName: string;
    songDuration: string;
    isPlaying?: boolean;
    onClick?: () => void;
    index: number;
}

const MusicListItem = (props: Props) => {
    return (
        <div className={styles.listItem}>
            <div
                style={{ backgroundImage: `url(${props.image})` }}
                className={styles.itemImageWrapper}
            >
                <div className={styles.itemHoverPhoto} onClick={props.onClick}>
                    <Image
                        src="/Images/PlayHover.svg"
                        alt="Pause Button"
                        width={54}
                        height={56}
                    />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionCenter}>
                    <div>
                        <h5 className={styles.songName}>{props.songTitle}</h5>
                        <span className={styles.artistName}>
                            {props.artistName}
                        </span>
                    </div>
                    <div>
                        <span className={styles.songDuration}>
                            {props.songDuration}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicListItem;
