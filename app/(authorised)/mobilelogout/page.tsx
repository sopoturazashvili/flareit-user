'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

const mobileLogOut = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/auth');
    };
    return (
        <div className={styles.mobileLogOut}>
            <div className={styles.profileAndButton}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileAndSearch}>
                        <div className={styles.profileBox}>
                            <p className={styles.profile}>Profile</p>
                        </div>
                        <div className={styles.mobileLogOutName}>
                            <img src="/Image/LogOut.svg" alt="LogOut" />
                            <p className={styles.color}></p>
                        </div>
                    </div>
                </div>
                <div className={styles.button} onClick={handleLogout}>
                    <button className={styles.logOutButton}>Log out</button>
                </div>
            </div>
        </div>
    );
};

export default mobileLogOut;
