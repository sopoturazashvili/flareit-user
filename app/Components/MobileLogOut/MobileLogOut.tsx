'use client';
import { useRouter } from 'next/navigation';
import styles from './MobileLogOut.module.scss';
import { useEffect, useState } from 'react';
import { email } from '@/app/interfaces/item';
import { getCookie, deleteCookie } from 'cookies-next';
import apiInstance from '@/app/ApiInstance';

const MobileLogOut = () => {
    const router = useRouter();
    const token = getCookie('token');
    const [emailList, setEmailList] = useState<email | null>(null);

    const handleLogout = async (event: React.MouseEvent) => {
        event.stopPropagation();
        deleteCookie('token');
        router.push('/auth');
        window.location.reload();
    };
    useEffect(() => {
        if (token) {
            apiInstance
                .get(`/users/me`)
                .then((res) => {
                    setEmailList(res.data);
                })
                .catch((err) => {
                    console.error('Error fetching user data:', err);
                });
        }
    }, [token]);

    return (
        <div className={styles.mobileLogOut}>
            <div className={styles.profileAndButton}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileAndSearch}>
                        <div className={styles.profileBox}>
                            <p className={styles.profile}>Profile</p>
                        </div>
                        <div className={styles.mobileLogOutName}>
                            <img
                                src="/allFolders/Image/LogOut.svg"
                                alt="LogOut"
                            />
                            {emailList && (
                                <p className={styles.color}>
                                    {emailList.email}
                                </p>
                            )}
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

export default MobileLogOut;
