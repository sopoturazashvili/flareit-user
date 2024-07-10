import styles from "./HeaderContainer.module.scss"
import NavDesktop from "../Navigation/NavDesktop/NavDesktop"
import Search from "./Search/Search"
import { useState } from "react"
import LogOutWeb from "../LogoutWeb/LogOutWeb"

interface Props {
    emile: string,
}

const HeaderContainer = (props: Props) => {
    const [logOut, setLogOut] = useState(false)
    console.log(logOut);


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
            <div className={styles.headerLogOut} onClick={() => { setLogOut(!logOut) }}>
                <LogOutWeb width={32} height={32} title={""} src={"/Image/LogOut.svg"}  />
            </div>
            {logOut ?
                <div className={styles.logOutBackground} onClick={() => { setLogOut(!logOut) }}>
                    <div className={styles.modalCont}>
                        <div className={styles.logOutModal}>
                            <div className={styles.logOutEmil}>
                                <span className={styles.color}>L.kuchadze@gmail.com</span>
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