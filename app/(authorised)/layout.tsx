'use client';
import HeaderContainer from '../Components/Header/HeaderContainer';
import NavMobile from '../Components/Navigation/NavMobile/NavMobile';
import Navigation from '../Components/Navigation/Navigation';
import Player from '../Components/PlayerControler/Player/Player';
import PlayerHandler from '../Components/PlayerControler/Player/PlayerHandler/PlayerHandler';
import styles from './layout.module.scss';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <PlayerHandler />
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
                        <Player />
                    </div>
                </div>
                <div className={styles.tabletPlayer}>
                    <Player />
                </div>
                <div className={styles.navMobile}>
                    <NavMobile />
                </div>
            </div>
        </div>
    );
};

export default Layout;
