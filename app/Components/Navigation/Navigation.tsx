import DesktopItem from "./NavDesktop/NavDesktop"
import MobileItem from "./NavMobile/NavMobile"
import styles from "./Navigation.module.scss"


const Navigation = () => {
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

export default Navigation