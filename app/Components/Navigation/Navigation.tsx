import Desktop from "./Desktop/Desktop"
import Mobile from "./Mobile/Mobile"
import styles from "./Navigation.module.scss"


const Navigation = () => {
    return (
        <div>
            <div className={styles.desktopCont}>
                <Desktop/>
            </div>
            <div className={styles.mobileCont}>
                <Mobile/>
            </div>
        </div>
    )
}

export default Navigation