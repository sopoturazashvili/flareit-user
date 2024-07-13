import styles from "./TabletMusicName.module.scss"


const TabletMusicName = () => {
    return (
        <div className={styles.tabletMusicName}>
            <img src="/PlayerControler/TabletPhoto.svg" />
            <div className={styles.tabletAndMusicBox}>
                <span className={styles.musicName}>starboy</span>
                <div>
                    <span className={styles.name}>Morgan Maxwell</span>
                </div>
            </div>
        </div>
    )
}

export default TabletMusicName