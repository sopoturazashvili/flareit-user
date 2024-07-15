import { useRecoilState } from "recoil"
import styles from "./FullScreenImage.module.scss"
import { tabletFullScrenState } from "@/app/state"




const FullScreenImage = () => {
    const [fullScreen,setFullScreen] = useRecoilState(tabletFullScrenState)

    const fullScreenFunc = () =>{
        setFullScreen(false)
    }
    

    return (
        <div className={styles.fullScreenImage}>
            <img className={styles.backButton} src="/PlayerControler/TabletBackButton.svg" onClick={() => {fullScreenFunc()}} />
            <img className={styles.image} src="/PlayerControler/TabletImage.svg" />
        </div>
    )
}

export default FullScreenImage