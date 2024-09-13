import { useRouter } from 'next/navigation';
import styles from './LogOutTablet.module.scss';
import { deleteCookie } from 'cookies-next';

interface Props {
    image: string;
    title: string;
}

const LogOutTablet = (props: Props) => {
    const router = useRouter();

    const handleLogout = async (event: React.MouseEvent) => {
        event.stopPropagation();
        deleteCookie('token');
        router.push('/auth');
        window.location.reload();
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
