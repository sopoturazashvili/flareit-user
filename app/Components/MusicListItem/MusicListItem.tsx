import { useRecoilState } from 'recoil';
import styles from './MusicListItem.module.scss';
import { indexState, isPlayingState } from '../state';

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
    const [isPlaying] = useRecoilState(isPlayingState);
    const [currentIndex] = useRecoilState(indexState);

    return (
        <div className={styles.listItem} onClick={props.onClick}>
            <div
                style={{ backgroundImage: `url(${props.image})` }}
                className={styles.itemImageWrapper}
            >
                <div className={styles.itemHoverPhoto}>
                    {isPlaying && props.index === currentIndex ? (
                        <img
                            className={styles.image}
                            src="/images/Pause.png"
                            alt="Pause Button"
                        />
                    ) : (
                        <img
                            className={styles.image}
                            src="/images/PlayHover.svg"
                            alt="Play Button"
                        />
                    )}
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
