import Link from 'next/link';
import styles from './ArtistPlaylistItem.module.scss';
import Image from 'next/image';
import EditIcon from '../EditIcon/EditIcon';

interface Props {
    image: string;
    text: string;
    onClick?: () => void;
    imageRound: boolean;
    id?: number;
    pathName: string;
    value?: string;
    edit: boolean;
}

const ArtistPlaylistItem = (props: Props) => {
    const handleEditClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <Link href={props.pathName} passHref>
            <div className={styles.cardWrapper} onClick={props.onClick}>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <Image
                            src={props.image}
                            width={48}
                            height={48}
                            alt="Cover Image"
                            className={props.imageRound ? styles.rounded : ''}
                        />
                        <h4 className={styles.text}>{props.text}</h4>
                    </div>
                    <div className={styles.icons}>
                        {props.edit && (
                            <div onClick={handleEditClick}>
                                <EditIcon id={props.id} value={props.value} />
                            </div>
                        )}
                        <img
                            src={'/allFolders/images/Arrow.svg'}
                            width={24}
                            height={24}
                            alt="Go to page"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtistPlaylistItem;
