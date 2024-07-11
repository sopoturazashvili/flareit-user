import styles from "./SmallMusicSwitch.module.scss"


const SmallMusicSwitch = () => {
    return (
        <div className={styles.musicSwitch}>
            <img src="/PlayerControler/LeftSwitch.svg" alt="Left Switch"/>
            <img src="/PlayerControler/LeftTwist.svg" alt="Left Twist"/>
            <div className={styles.playPaus}>
                <img src="/PlayerControler/Play.svg" alt="Play"/>
            </div>
            <img src="/PlayerControler/RightSwitch.svg" alt="Right Switch"/>
            <img src="/PlayerControler/RightTwist.svg" alt="Right Twist"/>
        </div>
    )
}

export default SmallMusicSwitch