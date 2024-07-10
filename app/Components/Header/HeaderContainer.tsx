import styles from "./HeaderContainer.module.scss"
import LogOut from "../LogOut/LogOut"
import NavDesktop from "../Navigation/NavDesktop/NavDesktop"
import Search from "./Search/Search"


const HeaderContainer = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerSearchContainer}>
                <div>
                    <img src="/Image/Logo.svg" />
                </div>
                <div className={styles.searchContainer}>
                    <Search />
                </div>
            </div>
            <div className={styles.headerLogOut}>
                <LogOut width={32} height={32} title={""} src={""} />
            </div>
            <div className={styles.NavDesktopCont}>
                <NavDesktop />
            </div>
        </div>
    )
}

export default HeaderContainer