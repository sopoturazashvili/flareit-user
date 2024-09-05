'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeaderContainer from '../Components/Header/HeaderContainer';
import NavMobile from '../Components/Navigation/NavMobile/NavMobile';
import Navigation from '../Components/Navigation/Navigation';
import Player from '../Components/PlayerControler/Player/Player';
import PlayerHandler from '../Components/PlayerControler/Player/PlayerHandler/PlayerHandler';
import styles from './layout.module.scss';
import { ReactNode } from 'react';
import LoadingSpinner from '../Components/LoadingSpinner/LoaddingSpinner';
import { searchRefState, searchTermState } from '../states/searchStates';
import { useRecoilState, useRecoilValue } from 'recoil';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null,
    );
    const [, setSearchTerm] = useRecoilState(searchTermState);
    const searchRef = useRecoilValue(searchRefState);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef && !searchRef.contains(event.target as Node)) {
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef, setSearchTerm]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/auth');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (isAuthenticated === null) {
        return <LoadingSpinner />;
    }

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
