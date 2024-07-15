import styles from "./MobileMusicName.module.scss"
import Name from "./Name/Name"

const MobileMusicName = () => {
    return (
        <div className={styles.nameContainer}>
            <img className={styles.image} src="/PlayerControler/MobilePhoto.svg" />
            <Name autor={""} name={""}/>
        </div>
    )
}

export default MobileMusicName