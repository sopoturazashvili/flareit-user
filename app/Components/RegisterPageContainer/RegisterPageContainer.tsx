'use client';

import RegisterForm from '@/app/Components/RegisterForm/RegisterForm';
import styles from './RegisterPageContainer.module.scss';

const RegisterPageContainer = () => {
    return (
        <div className={styles.container}>
              <video className={styles.backgroundVideo} autoPlay muted loop>
                <source src="/authPage/authBlue.mp4" />
            </video>
            <div className={styles.containerInside}>
                <div className={styles.registerPageContainer}>
                    <div className={styles.flareIt}>
                        <img
                            className={styles.flareItPhoto}
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
