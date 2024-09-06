import { useRouter } from 'next/navigation';
import styles from './LogOutModal.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { email } from '@/app/interfaces/item';

interface Props {
    setLogOut: (e: boolean) => void;
    logOut: boolean;
}

const LogOutModal = (props: Props) => {
    const [emailList, setEmailList] = useState<email>();
    const router = useRouter();
    const token = localStorage.getItem('token');

    const handleLogout = (event: React.MouseEvent) => {
        event.stopPropagation();
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
