import styles from "./MobileMusicName.module.scss"
import Name from "./Name/Name"

interface Props {
    fullScreen: boolean,
    setFullScreen: any
}

const MobileMusicName = (props:Props) => {
    return (
        <div className={styles.nameContainer}onClick={() => {props.setFullScreen(!props.fullScreen)}} >
            <img className={styles.image} src="/PlayerControler/MobilePhoto.svg" />
            <Name autor={""} name={""}/>
        </div>
    )
}

export default MobileMusicName