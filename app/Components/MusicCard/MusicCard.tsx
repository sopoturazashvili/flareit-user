import styles from "./MusicCard.module.scss";
import LikeButton from "../LikeButton/LikeButton";

interface Props {
  image: string;
  title: string;
  teamName: string;
}

const MusicCard = (props: Props) => {
  return (
    <div className={styles.musicCard}>
      <div className={styles.musicCardHeader}>
        <div className={styles.musicCardhover}>
          <img className={styles.musicCardPhoto} src={props.image} />
          <div className={styles.musicCardHoverPhoto}>
            <img src="/Image/PlayHover.svg" />
          </div>
        </div>
        <div className={styles.musicCardTitle}>
          <span className={styles.musicCardName}>{props.title}</span>
          <span className={styles.musicCardTeam}>{props.teamName}</span>
        </div>
      </div>
      <div>
        <LikeButton isLiked={false} />
      </div>
    </div>
  );
};

export default MusicCard;
