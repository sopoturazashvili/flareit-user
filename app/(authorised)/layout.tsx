import HeaderContainer from '../Components/Header/HeaderContainer';
import NavDesktop from '../Components/Navigation/NavDesktop/NavDesktop';
import Navigation from '../Components/Navigation/Navigation';
import styles from './layout.module.scss'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div className={styles.headerAndNavigation}>
            <div className={styles.navigation}>
                <Navigation/>
            </div>
            <div className={styles.header}>
                <HeaderContainer/>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;