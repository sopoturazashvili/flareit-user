import styles from "./HeaderContainer.module.scss"
import NavDesktop from "../Navigation/NavDesktop/NavDesktop"
import Search from "./Search/Search"
import { useState } from "react"
import LogOutWeb from "../LogoutWeb/LogOutWeb"
import Logo from "../Logo/Logo"

interface Props {
    email: string,
}

const HeaderContainer = (props: Props) => {
    const [logOut, setLogOut] = useState(false)
    console.log(logOut);


    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerSearchContainer}>
                <Logo/>
                <div className={styles.searchContainer}>
                    <Search />
                </div>
            </div>
            <div className={styles.headerLogOut} onClick={() => { setLogOut(!logOut) }}>
                <LogOutWeb width={32} height={32} title={""} src={"/Image/LogOut.svg"}  />
            </div>
            {logOut ?
                <div className={styles.logOutBackground} onClick={() => { setLogOut(!logOut) }}>
                    <div className={styles.modalCont}>
                        <div className={styles.logOutModal}>
                            <div className={styles.logOutEmil}>
                                <span className={styles.color}>{props.email}</span>
                            </div>
                            <div className={styles.logOut}>
                                <img src="/Image/LogOutIcon.svg" />
                                <span className={styles.color}>Log Out</span>
                            </div>
                        </div>
                    </div>
                </div> : ""}
            <div className={styles.NavDesktopCont}>
                <NavDesktop />
            </div>
        </div>
    )
}

export default HeaderContainer