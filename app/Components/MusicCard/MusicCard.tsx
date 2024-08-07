import { useRef, useState } from 'react';
import styles from './MusicCard.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import DeleteBox from '../DleleteBox/DeleteBox';
import LikeButtonModal from '../LikeButtonModal/LikeButtonModal';

interface Props {
    image: string;
    title: string;
    teamName: string;
    deleteOrLike: boolean;
    id: number;
}

const MusicCard = (props: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const menu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.musicCard} ref={cardRef}>
            <div className={styles.musicCardHeader}>
                <div className={styles.musicCardhover}>
                    <img
                        className={styles.musicCardPhoto}
                        src={props.image}
                        alt="photo"
                    />
                    <div className={styles.musicCardHoverPhoto}>
                        <img src="/images/PlayHover.svg" alt="PlayHover" />
                    </div>
                </div>
                <div className={styles.musicCardTitle}>
                    <span className={styles.musicCardName}>{props.title}</span>
                    <span className={styles.musicCardTeam}>
                        {props.teamName}
                    </span>
                </div>
            </div>
            <div>
                {props.deleteOrLike ? (
                    <DeleteBox id={props.id} />
                ) : (
                    <LikeButton isLiked={false} id={props.id} menu={menu} />
                )}
            </div>
            {menuOpen && (
                <LikeButtonModal
                    isOpen={menuOpen}
                    anchorElement={cardRef.current}
                />
            )}
        </div>
    );
};

export default MusicCard;
