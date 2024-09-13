'use client';

import { fullScreenState } from '@/app/state';
import LogOut from '../../LogOut/LogOut';
import Player from '../../PlayerControler/Player/Player';
import styles from './NavMobile.module.scss';
import MobileList from './NavMobileItem/NavMobileItem';
import { usePathname } from 'next/navigation';
import { useRecoilState } from 'recoil';

const NavMobile = () => {
    const [fullScreen] = useRecoilState(fullScreenState);

    const dataItem = [
        {
            image: '/allFolders/Image/Home.svg',
            title: 'Home',
            pinkImage: '/allFolders/Image/pinkHome.svg',
            href: '/',
            key: 'home',
        },
        {
            image: '/allFolders/Image/search.svg',
            title: 'Search',
            pinkImage: '/allFolders/Image/pinkSearch.svg',
            href: '/mobilesearch',
            key: 'search',
        },
        {
            image: '/allFolders/Image/Library.svg',
            title: 'Library',
            pinkImage: '/allFolders/Image/pinkLibrary.svg',
            href: '/mobilelibrary',
            key: 'library',
        },
    ];

    const pathname = usePathname();

    return (
        <div className={styles.mobileContainer}>
            <Player />
            {!fullScreen && (
                <div className={styles.navigationContainer}>
                    {dataItem.map((item) => (
                        <MobileList
                            key={item.key}
                            title={item.title}
                            image={item.image}
                            pinkImage={item.pinkImage}
                            href={item.href}
                            active={pathname === item.href}
                        />
                    ))}
                    <LogOut
                        src={'/allFolders/Image/LogOut.svg'}
                        width={24}
                        height={24}
                        title={'Profile'}
                    />
                </div>
            )}
        </div>
    );
};

export default NavMobile;
