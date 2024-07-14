import styles from "./FullScreenImage.module.scss"


interface Props {
    setFullScreen:any,
    fullScreen:boolean
}

const FullScreenImage = (props:Props) =>{
    return (
        <div className={styles.fullScreenImage}>
            <img className={styles.backButton} src="/PlayerControler/TabletBackButton.svg"  onClick={() => props.setFullScreen(!props.fullScreen)}/>
            <img className={styles.image} src="/PlayerControler/TabletImage.svg" />
        </div>
    )
}

export default FullScreenImage