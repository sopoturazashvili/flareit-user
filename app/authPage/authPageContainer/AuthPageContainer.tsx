import AuthForm from '../authForm/authForm';
import styles from './AuthPageContainer.module.scss';

const AuthPageContaiener = () => {
    return (
        <div className={styles.authPage}>
            <video className={styles.backgroundVideo} autoPlay muted loop>
                <source src="/authPage/authBlue.mp4" />
            </video>
            <div className={styles.container}>
                <div className={styles.authPageContaiener}>
                    <div className={styles.flareIt}>
                        <img
                            className={styles.flareItPhoto}
                            src="/authPage/authFlareIt.svg"
                            alt="Flare It"
                        />
                    </div>
                    <AuthForm />
                    <div className={styles.anotherAccountContainer}>
                        <p className={styles.anotherAccount}>
                            Don’t have an account? Sign up{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPageContaiener;
