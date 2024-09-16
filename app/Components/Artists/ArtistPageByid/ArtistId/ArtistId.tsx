import { useEffect, useState } from 'react';
import styles from './ArtistId.module.scss';
import apiInstance from '@/app/ApiInstance';
import { Album } from '@/app/interfaces/item';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Artist {
    biography: string;
    id: number;
    artistName: string;
    coverImgUrl: string;
    albums: Album[];
}

const ArtistId = () => {
    const [artist, setArtistData] = useState<Artist | null>(null);
    const params = useParams();
    const id = params?.id;
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const artistResult = await apiInstance.get(
                        `/authors/${id}`,
                    );

                    const artistData = artistResult.data || null;
                    setArtistData(artistData);
                } catch (error) {
                    console.error('Error fetching artist data:', error);
                    alert('Failed to fetch artist data. Please try again.');
                }
            };
            fetchData();
        }
    }, [id]);
    return (
        <>
            <div className={styles.artisCont}>
                <Link href={'/artists'} className={styles.artist}>
                    Artists
                </Link>
                <img src="/allFolders/images/metia.svg" />
                {artist && <p className={styles.songs}>{artist.artistName}</p>}
            </div>
            <div className={styles.nameAndPhoto}>
                {artist && (
                    <>
                        <img
                            className={styles.photo}
                            src={artist.coverImgUrl}
                            alt={artist.artistName}
                        />
                        <p className={styles.nameColor}>{artist.artistName}</p>
                        <p className={styles.biografiContainer}>
                            {artist.biography}
                        </p>
                    </>
                )}
            </div>
        </>
    );
};

export default ArtistId;
