import styles from "./HeaderContainer.module.scss"
import NavDesktop from "../Navigation/NavDesktop/NavDesktop"
import Search from "./Search/Search"
import { useState } from "react"
import LogOutWeb from "../LogoutWeb/LogOutWeb"
import Logo from "../Logo/Logo"
import LogOutModal from "./LogOutModal/LogOutModal"

interface Props {
    logOut: boolean
}

const HeaderContainer = (props: Props) => {
    const [logOut, setLogOut] = useState(false)

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerSearchContainer}>
                <Logo />
                <div className={styles.searchContainer}>
                    <Search />
                </div>
            </div>
            <div className={styles.headerLogOut} onClick={() => { setLogOut(!logOut) }}>
                <LogOutWeb width={32} height={32} title={""} src={"/Image/LogOut.svg"} />
            </div>
            <LogOutModal email={""} logOut={logOut} setLogOut={setLogOut} />
        </div>
    )
}

export default HeaderContainer