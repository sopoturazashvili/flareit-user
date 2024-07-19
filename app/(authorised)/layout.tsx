import HeaderContainer from '../Components/Header/HeaderContainer';
import NavDesktop from '../Components/Navigation/NavDesktop/NavDesktop';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import NavMobile from '../Components/Navigation/NavMobile/NavMobile';
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
                <div className={styles.navMobile}>
                    <NavMobile/>
                </div>
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            </div>
        </div>
    )
}

export default Layout;