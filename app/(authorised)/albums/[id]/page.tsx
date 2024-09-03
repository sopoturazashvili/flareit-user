import OneAlbumById from '@/app/Components/Albums/OneAlbumById/OneAlbumById';
import styles from './page.module.scss';

const OneAlbum = () => {
    return (
        <div className={styles.OneAlbum}>
            <OneAlbumById />
        </div>
    );
};

export default OneAlbum;
