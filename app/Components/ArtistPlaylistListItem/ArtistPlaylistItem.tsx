import Link from 'next/link';
import styles from './ArtistPlaylistItem.module.scss'
import Image from 'next/image'

interface Props {
    image: string;
    text: string;
    onClick?: () => void;
    imageRound: boolean;
    id:number;
    pagePathName:string;
}


const ArtistPlaylistItem = (props: Props) => {
    return (
        <Link href={`/${props.pagePathName}/${props.id}`}>
            <div className={styles.cardWrapper} onClick={props.onClick} >
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <Image src={props.image} width={48} height={48} alt='Cover Image' className={props.imageRound ? styles.rounded : ''} />
                        <h4 className={styles.text}>{props.text}</h4>
                    </div>
                    <Image src={'/images/Arrow.svg'} width={24} height={24} alt='Go to page' />
                </div>
            </div>
        </Link>
    )
}

export default ArtistPlaylistItem;