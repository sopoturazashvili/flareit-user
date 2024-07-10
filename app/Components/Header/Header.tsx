import LogOut from "../LogOut/LogOut"
import Navigation from "../Navigation/Navigation"
import styles from "./Header.module.scss"
import Search from "./Search/Search"


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerSearchContainer}>
                {/* <div className={styles.LogoCont}> */}
                    <img src="/Image/Logo.svg" />
                {/* </div> */}
                <Search />
            </div>
            <div className={styles.logOut}>
                <LogOut src={"/Image/LogOut.svg"} width={24} height={24} title={""} />
            </div>
            <div className={styles.navigation}>
                <Navigation />
            </div>
        </div>
    )
}

export default Header