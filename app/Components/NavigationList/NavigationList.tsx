import DesktopItem from "./DesktopItem/DesktopItem"
import MobileItem from "./MobileItem/MobileItem"
import styles from "./NavigationList.module.scss"


const NavigationList = () => {
    return (
        <div>
            <div className={styles.desktopItem}>
                <DesktopItem/>
            </div>
            <div className={styles.mobileItem}>
                <MobileItem/>
            </div>
        </div>
    )
}

export default NavigationList