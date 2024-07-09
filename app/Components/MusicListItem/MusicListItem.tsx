import styles from './MusicListItem.module.scss'
import Image from 'next/image'

interface Props {
    image: string;
    songTitle: string;
    artistName: string;
    songDuration: string;
}

const MusicListItem = (props: Props) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.itemImageWrapper}>
                <Image className={styles.itemImage} src={props.image} width={54} height={56} alt='Music Card Cover' />
                <div className={styles.itemHoverPhoto}>
                    <Image src="/images/PlayHover.svg" alt="Play Button" width={54} height={56}/>
                </div>
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

export default MusicListItem;