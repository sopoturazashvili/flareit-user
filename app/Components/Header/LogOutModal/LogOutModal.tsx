'use client';

import { useRouter } from 'next/navigation';
import styles from './LogOutModal.module.scss';
import { useEffect, useState } from 'react';
import apiInstance from '@/app/ApiInstance';
import Cookies from 'js-cookie';
import { deleteCookie } from '@/app/helpers/Cookies';

interface Props {
    setLogOut: (e: boolean) => void;
    logOut: boolean;
}

interface Email {
    email: string;
}

const LogOutModal = (props: Props) => {
    const [emailList, setEmailList] = useState<Email | null>(null);
    const router = useRouter();

    const handleLogout = async (event: React.MouseEvent) => {
        event.stopPropagation();

        Cookies.remove('token');
        deleteCookie('token');
        router.push('/auth');
        window.location.reload();
    };

    useEffect(() => {
        apiInstance
            .get(`/users/me`)
            .then((res) => {
                setEmailList(res.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    return (
        <>
            {props.logOut && (
                <div
                    className={styles.logOutBackground}
                    onClick={() => {
                        props.setLogOut(false);
                    }}
                >
                    <div
                        className={styles.modalCont}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className={styles.logOutModal}>
                            <div>
                                {emailList && (
                                    <span className={styles.color}>
                                        {emailList.email}
                                    </span>
                                )}
                            </div>
                            <div
                                className={styles.logOut}
                                onClick={handleLogout}
                            >
                                <img
                                    src="/Image/LogOutIcon.svg"
                                    alt="LogOutIcon"
                                />
                                <span className={styles.color}>Log Out</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LogOutModal;
