import NavMobile from "../../Navigation/NavMobile/NavMobile";
import HeaderContainer from "../HeaderContainer";
import styles from "./HeaderAndNav.module.scss"


const HeaderAndNav = () => {
    return (
        <div>
            <div className={styles.Header}>
                <HeaderContainer />
            </div>
            <div className={styles.NavMobile}>
                <NavMobile />
            </div>
        </div>
    )
}

export default HeaderAndNav