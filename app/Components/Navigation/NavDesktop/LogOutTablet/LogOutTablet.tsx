import { useRouter } from 'next/navigation';
import styles from './LogOutTablet.module.scss';

interface Props {
    image: string;
    title: string;
}

const LogOutTablet = (props: Props) => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/auth');
    };

    return (
        <div className={styles.logOutTablet} onClick={handleLogout}>
            <img
                src={props.image}
                alt={props.title}
                style={{ cursor: 'pointer' }}
            />
            <p>{props.title}</p>
        </div>
    );
};

export default LogOutTablet;
