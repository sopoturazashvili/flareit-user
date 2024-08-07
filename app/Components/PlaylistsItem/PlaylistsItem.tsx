import styles from '@/app/Components/PlaylistsItem/PlaylistsItem.module.scss';

interface Props {
    playlistName: string;
}

const PlaylistsItem = (props: Props) => {
    return (
        <div className={styles.item}>
            <span className={styles.title}>{props.playlistName}</span>
        </div>
    );
};

export default PlaylistsItem;
