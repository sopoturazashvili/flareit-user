import styles from './PlaylistItem.module.scss';

interface Props {
    playlistName: string;
}

const PlaylistItem = (props: Props) => {
    return (
        <div className={styles.item}>
            <span className={styles.title}>{props.playlistName}</span>
        </div>
    );
};

export default PlaylistItem;
