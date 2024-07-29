import ArtistPlaylistItem from "@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem";
import styles from "./page.module.scss";
import ArtistPlaylistItem from "@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem";
import styles from "./page.module.scss";

const TopArtists = () => {
    const artists = [
        {
            id: 1,
            name: "Sia",
            image: "/images/sia.svg",
        },
        {
            id: 2,
            name: "Beyonce",
            image: "/images/beyonce.svg",
        },
        {
            id: 3,
            name: "Ed Sheeran",
            image: "/images/edSheeran.svg",
        },
        {
            id: 4,
            name: "Taylor Swift",
            image: "/images/taylor.svg",
        },
        {
            id: 5,
            name: "Ariana Grande",
            image: "/images/ariana.svg",
        },
    ];

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>Top Artist</span>
            </div>
            <div className={styles.list}>
                {artists.map((artist) => (
                    <ArtistPlaylistItem
                        key={artist.id}
                        image={artist.image}
                        text={artist.name}
                        imageRound={true}
                        id={artist.id}
                        pagePathName={"topArtist"}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopArtists;
