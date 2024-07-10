import NavDesktop from "../Navigation/NavDesktop/NavDesktop"
import styles from "./Header.module.scss"
import Search from "./Search/Search"


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerSearchContainer}>
                <img src="/Image/Logo.svg" />
                <Search/>
            </div>
            <div>
                <NavDesktop/>
            </div>
        </div>
    )
}

export default Header