import { useState } from "react"
import styles from "./DesktopMusicName.module.scss"

interface Props {
    image:string,
    title:string
}

export const   DesktopMusicName = (props:Props) => {
    const [fullScreen,setFullScreen] = useState(false)
    
    return(
        <div className={styles.imageAndTitle}>
            <img  className={styles.image} src={props.image} />
            <span className={styles.title}>{props.title}</span>
        </div>
    )
}

export default DesktopMusicName