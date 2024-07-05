import styles from "./LogOut.module.scss"
import Image from "next/image"
import { useState } from "react"

interface Props {
    src:string
    width:number,
    height:number,
    title:string
}

const LogOut = (props:Props) => {
    const [profile,setProfile] = useState(false)  
    
    const onClick = () =>{
        setProfile(!profile)
    }
    return (
        <div className={styles.profile} onClick={onClick}>
            <Image src={props.src} width={props.width} height={props.height} alt={"profile"}/>
            {props.title && <span className={styles.title}>{props.title}</span>}
        </div>
    )
}

export default LogOut