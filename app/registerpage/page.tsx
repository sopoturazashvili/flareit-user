import styles from './page.module.scss';
import RegisterPageContainer from '../Components/RegisterPageContainer/RegisterPageContainer';

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <RegisterPageContainer />
        </div>
    );
};

export default RegisterPage;
