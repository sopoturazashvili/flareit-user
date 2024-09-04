'use client';
import Playlist from '@/app/Components/Playlist/Playlist';
import styles from './page.module.scss';

const OnePlaylist = () => {
    return (
        <div className={styles.container}>
            <Playlist />
        </div>
    );
};

export default OnePlaylist;
