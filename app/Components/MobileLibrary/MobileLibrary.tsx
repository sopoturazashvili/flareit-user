import Link from 'next/link';
import styles from './MobileLibrary.module.scss';

const MobileLibrary = () => {
    return (
        <div className={styles.library}>
            <p className={styles.libraryTitle}>Library</p>
            <div className={styles.container}>
                <Link className={styles.libraryList} href={'/artists'}>
                    <img src="/allFolders/Image/Artist.svg" />
                    <p className={styles.title}>Artist</p>
                </Link>
                <Link className={styles.libraryList} href={'/playlists'}>
                    <img src="/allFolders/Image/Playlist.svg" />
                    <p className={styles.title}>Playlist</p>
                </Link>
                <Link className={styles.libraryList} href={'/albums'}>
                    <img src="/allFolders/Image/Albums.svg" />
                    <p className={styles.title}>Albums</p>
                </Link>
            </div>
        </div>
    );
};
export default MobileLibrary;
