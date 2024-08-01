'use client';

import HeaderContainer from '../Components/Header/HeaderContainer';
import NavMobile from '../Components/Navigation/NavMobile/NavMobile';
import Navigation from '../Components/Navigation/Navigation';
import PlayerAndList from '../Components/PlayerAndList/PlayerAndList';
import TabletPlayer from '../Components/PlayerControler/TabletPlayer/TabletPlayer/TabletPlayer';
import styles from './layout.module.scss';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navWrapper}>
                <Navigation />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <HeaderContainer />
                </div>
                <div className={styles.childrenAndPlayer}>
                    <div className={styles.children}>{props.children}</div>
                    <div className={styles.playerAndList}>
                        <PlayerAndList />
                    </div>
                </div>
                <div className={styles.tabletPlayer}>
                    <TabletPlayer />
                </div>
                <div className={styles.navMobile}>
                    <NavMobile />
                </div>
            </div>
        </div>
    );
};

export default Layout;
