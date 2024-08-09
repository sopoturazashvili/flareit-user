import styles from './MusicCard.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import DeleteBox from '../DleleteBox/DeleteBox';

interface Props {
    image: string;
    title: string;
    teamName: string;
    deleteOrLike: boolean;
    id: number;
    onClick: () => void;
    isPlaying: boolean;
    index: number;
}

const MusicCard = (props: Props) => {
    return (
        <div className={styles.musicCard}>
            <div className={styles.musicCardHeader} onClick={props.onClick}>
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
                    <LikeButton isLiked={false} id={props.id} />
                )}
            </div>
        </div>
    );
};

export default MusicCard;
