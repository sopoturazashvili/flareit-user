'use client';
import { useRouter } from 'next/navigation';
import styles from './MobileLogOut.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { email } from '@/app/interfaces/item';

const MobileLogOut = () => {
    const router = useRouter();
    const token = localStorage.getItem('token');
    const [emailList, setEmailList] = useState<email>();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/auth');
    };

    useEffect(() => {
        if (token) {
            axios
                .get(`https://enigma-wtuc.onrender.com/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setEmailList(res.data);
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
                            <img src="/Image/LogOut.svg" alt="LogOut" />
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
