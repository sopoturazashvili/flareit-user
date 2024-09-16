import Link from 'next/link';
import styles from './AlbumId.module.scss';
import { useEffect, useState } from 'react';
import apiInstance from '@/app/ApiInstance';
import { useParams } from 'next/navigation';

interface AlbumId {
    coverImgUrl: string;
    releaseDate: string;
    title: string;
    albumName: string;
    artistName: string;
}

const AlbumIdCont = () => {
    const [album, setAlbum] = useState<AlbumId | null>(null);
    const param = useParams();
    const id = param.id;
    useEffect(() => {
        const fetchAlbum = async () => {
            if (id) {
                try {
                    const res = await apiInstance.get(`/albums/${id}`);
                    setAlbum(res.data);
                } catch (error) {
                    alert(error);
                }
            }
        };

        fetchAlbum();
    }, []);
    return (
        <>
            <div className={styles.artisCont}>
                <Link href={'/albums'} className={styles.artist}>
                    Albums
                </Link>
                <img src="/allFolders/images/metia.svg" />
                {album && <p className={styles.songs}>{album.artistName}</p>}
            </div>
            <div>
                {album && (
                    <div className={styles.photoContainer}>
                        <img
                            className={styles.image}
                            src={album.coverImgUrl}
                            alt="Album Cover"
                        />
                        <div className={styles.nameContainer}>
                            <span className={styles.musicName}>
                                {album.title}
                            </span>
                            <span className={styles.artistName}>
                                {album.artistName}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AlbumIdCont;
