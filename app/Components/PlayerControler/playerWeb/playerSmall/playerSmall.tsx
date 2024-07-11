import styles from "./PlayerSmall.module.scss"
import SmallInputRange from "./SmallInputRange/SmallInputRange"
import SmallMusicSwitch from "./SmallMusicSwitch/SmallMusicSwitch"
import SmallShuffle from "./SmallShuffle/SmallShufle"
import SmallVolume from "./SmallVolume/SmallVolume"
import SmallMusicName from "./SmallimageAndTitle/SmallMusicName"

const PlayerSmall = () => {
    return (
        <div className={styles.playerSmall}>
            <div className={styles.nameAndRange}>
                <SmallMusicName image={"/PlayerControler/MusicPhoto.svg"} title={"Imagine dragons- Believer"} />
                <SmallInputRange time={"3:44"} />
            </div>
            <div className={styles.musicPlayer}>
                <SmallVolume />
                <SmallMusicSwitch />
                <SmallShuffle />
            </div>
        </div>
    )
}

export default PlayerSmall