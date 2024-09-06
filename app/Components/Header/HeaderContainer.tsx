'use client';

import styles from './HeaderContainer.module.scss';
import NavDesktop from '../Navigation/NavDesktop/NavDesktop';
import Search from '../Search/Search';
import { useState } from 'react';
import LogOutWeb from '../LogoutWeb/LogOutWeb';
import Logo from '../Logo/Logo';
import LogOutModal from './LogOutModal/LogOutModal';

const HeaderContainer = () => {
    const [logOut, setLogOut] = useState(false);

    return (
        <div className={styles.headerContainerBox}>
            <div className={styles.headerContainer}>
                <div className={styles.headerSearchContainer}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.searchContainer}>
                        <Search />
                    </div>
                </div>
                <div
                    className={styles.headerLogOut}
                    onClick={() => {
                        setLogOut(!logOut);
                    }}
                >
                    <LogOutWeb
                        width={32}
                        height={32}
                        title={''}
                        src={'/Image/LogOut.svg'}
                    />
                </div>
                <LogOutModal logOut={logOut} setLogOut={setLogOut} />
                <div className={styles.NavDesktop}>
                    <NavDesktop />
                </div>
            </div>
        </div>
    );
};

export default HeaderContainer;
