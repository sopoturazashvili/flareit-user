"use client"

import NavDesktop from "./NavDesktop/NavDesktop"
import NavMobile from "./NavMobile/NavMobile"
import styles from "./Navigation.module.scss"


const Navigation = () => {
    return (
        <>
            <div className={styles.desktopItem}>
                <NavDesktop />
            </div>
            <div className={styles.mobileItem}>
                <NavMobile />
            </div>
        </>
    )
}

export default Navigation