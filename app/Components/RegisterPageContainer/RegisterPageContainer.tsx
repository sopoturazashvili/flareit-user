'use client';

import RegisterForm from '@/app/Components/RegisterForm/RegisterForm';
import styles from './RegisterPageContainer.module.scss';

const RegisterPageContainer = () => {
    return (
        <div className={styles.registerPage}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.backgroundVideo}
            >
                <source
                    src="/allFolders/authPage/authBlue.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            <div className={styles.containerInside}>
                <div className={styles.registerPageContainer}>
                    <div className={styles.flareIt}>
                        <img
                            className={styles.flareItPhoto}
                            alt="Flare It"
                            src={'/allFolders/authPage/authFlareIt.svg'}
                        />
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterPageContainer;
