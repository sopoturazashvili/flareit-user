import { useState } from "react"
import styles from "./SmallMusicName.module.scss"

interface Props {
    image:string,
    title:string
}

export const SmallMusicName = (props:Props) => {
    const [fullScreen,setFullScreen] = useState(false)
    
    return(
        <div className={styles.imageAndTitle}>
            <img  className={styles.image} src={props.image} />
            <span className={styles.title}>{props.title}</span>
        </div>
    )
}

export default SmallMusicName