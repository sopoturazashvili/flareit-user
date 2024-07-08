import styles from './MusicListItem.module.scss'
import Image from 'next/image'

interface Props {
    image: string;
    songTitle: string;
    artistName: string;
    songDuration: string;
}

const MusicList = (props: Props) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.itemImage}>
                <Image src={props.image} width={54} height={56} alt='Music Card Cover' />
            </div>
            <div className={styles.section}>
                <div className={styles.sectionCenter}>
                    <div>
                        <h5 className={styles.songName}>{props.songTitle}</h5>
                        <span className={styles.artistName}>{props.artistName}</span>
                    </div>
                    <div>
                        <span className={styles.songDuration}>{props.songDuration}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicList;