import styles from './LogOut.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    src: string;
    width: number;
    height: number;
    title: string;
}

const LogOut = (props: Props) => {
    const pathname = usePathname();

    return (
        <Link href="/mobilelogout" passHref>
            <div className={styles.profile}>
                {pathname === '/mobilelogout' ? (
                    <Image
                        src="/allFolders/Image/mobileProfile.svg"
                        width={props.width}
                        height={props.height}
                        alt={props.title}
                    />
                ) : (
                    <Image
                        src={props.src}
                        width={props.width}
                        height={props.height}
                        alt={props.title}
                    />
                )}
                <span
                    className={
                        pathname === '/mobilelogout'
                            ? styles.pink
                            : styles.title
                    }
                >
                    {props.title}
                </span>
            </div>
        </Link>
    );
};

export default LogOut;
