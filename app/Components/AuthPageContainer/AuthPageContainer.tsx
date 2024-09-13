'use client';

import Link from 'next/link';
import AuthForm from '@/app/Components/AuthForm/AuthForm';
import styles from './AuthPageContainer.module.scss';

const AuthPageContainer = () => {
    return (
        <div className={styles.authPage}>
            <div className={styles.container}>
                <div className={styles.authPageContaiener}>
                    <div className={styles.flareIt}>
                        <img
                            className={styles.flareItPhoto}
                            src="/allFolders/authPage/authFlareIt.svg"
                            alt="Flare It"
                        />
                    </div>
                    <AuthForm />
                    <div className={styles.anotherAccountContainer}>
                        <Link
                            className={styles.anotherAccount}
                            href={'/register'}
                        >
                            Don’t have an account? Sign up{' '}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPageContainer;
