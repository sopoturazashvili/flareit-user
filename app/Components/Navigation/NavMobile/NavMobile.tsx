'use client';

import LogOut from '../../LogOut/LogOut';
import styles from './NavMobile.module.scss';
import MobileList from './NavMobileItem/NavMobileItem';
import { usePathname } from 'next/navigation';

const NavMobile = () => {
    const dataItem = [
        {
            image: '/Image/Home.svg',
            title: 'Home',
            pinkImage: '/Image/pinkHome.svg',
            href: '/',
            key: 'home',
        },
        {
            image: '/Image/search.svg',
            title: 'Search',
            pinkImage: '/Image/pinkSearch.svg',
            href: '/mobilesearch',
            key: 'search',
        },
        {
            image: '/Image/Library.svg',
            title: 'Library',
            pinkImage: '/Image/pinkLibrary.svg',
            href: '/artists',
            key: 'library',
        },
    ];

    const pathname = usePathname();

    return (
        <div className={styles.mobileContainer}>
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
                    src={'/Image/LogOut.svg'}
                    width={24}
                    height={24}
                    title={'Profile'}
                />
            </div>
        </div>
    );
};

export default NavMobile;
