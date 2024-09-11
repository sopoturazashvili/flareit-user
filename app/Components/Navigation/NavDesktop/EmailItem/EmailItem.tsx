import { useEffect, useState } from 'react';
import styles from './EmailItem.module.scss';
import { email } from '@/app/interfaces/item';
import apiInstance from '@/app/ApiInstance';

const EmailItem = () => {
    const [email, setEmail] = useState<email>();

    useEffect(() => {
        apiInstance.get(`/users/me`).then((res) => {
            setEmail(res.data);
        });
    }, []);

    return (
        <div className={styles.emailContainer}>
            {email && <span className={styles.mail}>{email.email}</span>}
        </div>
    );
};

export default EmailItem;
