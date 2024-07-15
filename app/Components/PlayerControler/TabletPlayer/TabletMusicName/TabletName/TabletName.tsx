import { useRecoilState } from "recoil"
import styles from "./TabletName.module.scss"
import { tabletFullScrenState } from "@/app/state"

interface Props {
    musicName: string,
    name: string
}

const TabletName = (props: Props) => {
    const [fullScreen, setFullScreen] = useRecoilState(tabletFullScrenState)

    return (
        <div className={styles.tabletAndMusicBox}>
            <span className={fullScreen ? styles.musicFullScreen : styles.musicName}>{props.musicName}</span>
            <span className={fullScreen ? styles.nameFullScreen : styles.name}>{props.name}</span>
        </div>
    )
}

export default TabletName