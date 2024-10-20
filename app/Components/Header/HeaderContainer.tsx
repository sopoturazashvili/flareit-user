'use client';

import styles from './HeaderContainer.module.scss';
import NavDesktop from '../Navigation/NavDesktop/NavDesktop';
import Search from '../Search/Search';
import LogOutWeb from '../LogoutWeb/LogOutWeb';
import Logo from '../Logo/Logo';
import LogOutModal from './LogOutModal/LogOutModal';
import { useRecoilState } from 'recoil';
import { logOutState } from '@/app/state';

const HeaderContainer = () => {
    const [logOut, setLogOut] = useRecoilState(logOutState);

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
                        src={'/allFolders/Image/LogOut.svg'}
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
