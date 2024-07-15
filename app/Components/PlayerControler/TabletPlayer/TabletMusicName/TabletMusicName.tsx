import styles from "./TabletMusicName.module.scss"
import TabletName from "./TabletName/TabletName"

interface Props{
    musicName:string,
    name:string,
}

const TabletMusicName = (props:Props) => {
    return (
        <div className={styles.tabletMusicName}>
            <img src="/PlayerControler/TabletPhoto.svg" />
            <TabletName musicName={props.musicName} name={props.name}/>
        </div>
    )
}

export default TabletMusicName