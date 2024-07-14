import styles from "./TabletName.module.scss"

interface Props {
    musicName:string,
    name:string
}

const TabletName = (props:Props) => {
    return(
        <div className={styles.tabletAndMusicBox} >
                <span className={styles.musicName}>{props.musicName}</span>
                <div>
                    <span className={styles.name}>{props.name}</span>
                </div>
            </div>
    )
}

export default TabletName