"use client";

import AddPlaylist from "@/app/Components/Playlist/AddPlaylist/AddPlaytlist";
import styles from "./page.module.scss";
import ArtistPlaylistItem from "@/app/Components/ArtistPlaylistListItem/ArtistPlaylistItem";

const Playlists = () => {
  const playlists = [
    {
      id: 1,
      name: "My Everyday",
      image: "/images/myeveryday.png",
    },
    {
      id: 2,
      name: "Party Songs",
      image: "/images/partySongs.png",
    },
    {
      id: 3,
      name: "Car Songs",
      image: "/images/carSongs.png",
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>Playlists</span>
      </div>
      <div className={styles.list}>
        <AddPlaylist />
        {playlists.map((playlist) => (
          <ArtistPlaylistItem
            image={playlist.image}
            text={playlist.name}
            imageRound={false}
            id={playlist.id}
            pagePathName={"playlists"}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
