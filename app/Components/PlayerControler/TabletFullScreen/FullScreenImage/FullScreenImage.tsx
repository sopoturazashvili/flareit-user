import styles from "./FullScreenImage.module.scss"


const FullScreenImage = () =>{
    return (
        <div className={styles.fullScreenImage}>
            <img className={styles.backButton} src="/PlayerControler/TabletBackButton.svg" />
            <img className={styles.image} src="/PlayerControler/TabletImage.svg" />
        </div>
    )
}

export default FullScreenImage