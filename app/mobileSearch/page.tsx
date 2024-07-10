"use client"


import Search from "../Components/Header/Search/Search"
import NavMobile from "../Components/Navigation/NavMobile/NavMobile"
import styles from "./page.module.scss"


const mobileSearch = () => {
    return (
        <div className={styles.styles}>
            <div className={styles.mobileSearch}>
                <div className={styles.searchContainer}>
                    <div >
                        <p className={styles.search}>Search</p>
                    </div>
                    <div className={styles.mobileSearchContainer}>
                        <Search />
                    </div>
                </div>
                <div className={styles.navMobile}>
                    <NavMobile />
                </div>
            </div>
        </div>
    )
}

export default mobileSearch