import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => (
    <div className={styles.spinner}>
        <div className={styles.loader}></div>
    </div>
);

export default LoadingSpinner;
