import MusicListItem from "@/app/Components/MusicListItem/MusicListItem";
import styles from "./MusicList.module.scss";
import { useState } from "react";

const MusicList = () => {
    const data = [
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
        { image: "/images/natashaB.png", songTitle: "Unwritten", artistName: "Natasha Bedingfield", songDuration: "4:17" },
    ];

    const [musicUp, setMusicUp] = useState(false);

    const musicUpFunc = () => {
        setMusicUp(!musicUp);
    };

    return (
        <div className={styles.musicList} >
            <div className={styles.musicListBackground} style={{ transform: musicUp ? 'translateY(0%)' : 'translateY(0%)' }}>
                <div className={`${styles.imageContainer} ${musicUp ? styles.rotateUp : ''}`} onClick={musicUpFunc}>
                    <img src={musicUp ? "/PlayerControler/MusicDown.svg" : "/PlayerControler/MusicUp.svg"} alt="Music control" />
                </div>
                {/* <div className={styles.nameAndMusic}> */}
                    <p className={styles.nextContainer}>Next Play</p>
                    <div className={styles.musicListItem}>
                        {data.slice(0, musicUp ? 6 : 3).map((item, index) => (
                            <MusicListItem key={index} image={item.image} songTitle={item.songTitle} artistName={item.artistName} songDuration={item.songDuration} />
                        ))}
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default MusicList;

