'use client';

import RegisterForm from '@/app/Components/RegisterForm/RegisterForm';
import styles from './RegisterPageContainer.module.scss';
import Image from 'next/image';

const RegisterPageContainer = () => {
    return (
        <div className={styles.container}>
            <video className={styles.backgroundVideo}>
                <source src="/authPage/authBlue.mp4" />
            </video>
            <div className={styles.containerInside}>
                <div className={styles.registerPageContainer}>
                    <div className={styles.flareIt}>
                        <Image
                            width={150}
                            height={150}
                            alt="Flare It"
                            src={'/authPage/authFlareIt.svg'}
                        />
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterPageContainer;
