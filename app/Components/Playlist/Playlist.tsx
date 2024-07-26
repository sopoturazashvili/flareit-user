import MusicCard from "../MusicCard/MusicCard";
import styles from "./Playlist.module.scss";

interface Props {
  image:string
}

const Playlist = (props:Props) => {
  const data = [
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 1,
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 2,
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 3,
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id: 4,
    },
  ];
  return (
    <div className={styles.PlaylistContainer}>
      <div className={styles.photoAndNameCont}>
        <div className={styles.photoAndName}>
          <img src={props.image} />
          <span className={styles.name}>My Everyday</span>
        </div>
      </div>
      <div className={styles.topFourHits}>
        {data.map((item) => (
          <MusicCard
            image={item.image}
            title={item.title}
            teamName={item.temeName}
            deleteOrLike={true}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
