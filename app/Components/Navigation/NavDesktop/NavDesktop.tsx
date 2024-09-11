'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './NavDesktop.module.scss';
import { usePathname } from 'next/navigation';
import NavDesktopItem from './NavDesktopItem/NavDesktopItem';
import Image from 'next/image';
import LogOutTablet from './LogOutTablet/LogOutTablet';
import Logo from '../../Logo/Logo';
import { useRecoilState } from 'recoil';
import { fullScreenState, globalImageState, indexState } from '@/app/state';
import EmailItem from './EmailItem/EmailItem';
import { useMediaQuery } from 'react-responsive';

const NavDesktop = () => {
    const [fullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    const [index] = useRecoilState(indexState);
    const data = [
        { title: 'Home', href: '/', image: '/Image/Home.svg', key: '/' },
        {
            title: 'Artists',
            href: '/artists',
            image: '/Image/Artist.svg',
            key: '/artists',
        },
        {
            title: 'Playlists',
            href: '/playlists',
            image: '/Image/Albums.svg',
            key: '/playlists',
        },
        {
            title: 'Albums',
            href: '/albums',
            image: '/Image/Playlist.svg',
            key: '/albums',
        },
    ];
    const navRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const isTablet = useMediaQuery({
        query: '(min-width: 600px) and (max-width: 1023px)',
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node | null;

            if (isOpen && navRef.current && !navRef.current.contains(target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.mainNavigation} ref={navRef}>
            <div className={styles.lineContainer}>
                <div className={styles.line} onClick={toggleMenu}>
                    <Image
                        width={40}
                        height={40}
                        src="/Image/Line.svg"
                        alt="Menu"
                    />
                </div>
            </div>
            <div
                className={`${styles.navigationContainer}  ${
                    isOpen ? styles.open : ''
                }`}
            >
                <div className={styles.logo}>
                    {fullScreen && image[index] ? '' : <Logo />}
                </div>
                <div className={styles.navigation}>
                    <div className={styles.navigationLine}>
                        <Image
                            width={40}
                            height={40}
                            onClick={toggleMenu}
                            src="/Image/Line.svg"
                            alt="Menu"
                        />
                    </div>
                    <div>{isTablet && <EmailItem />}</div>
                    {data.map((item) => (
                        <NavDesktopItem
                            key={item.key}
                            image={item.image}
                            title={item.title}
                            href={item.href}
                            active={
                                item.key === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.key)
                            }
                        />
                    ))}
                    <div className={styles.logOutTablet}>
                        <LogOutTablet
                            image={'Image/LogOutIcon.svg'}
                            title={'Log Out'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavDesktop;
