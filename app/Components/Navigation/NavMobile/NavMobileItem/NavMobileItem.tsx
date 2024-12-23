import styles from './NavMobileItem.module.scss';
import Link from 'next/link';
import { ColorEnum } from '@/app/enums/colors.enum';

interface Props {
    title: string;
    image: string;
    pinkImage?: string;
    href: string;
    active?: boolean;
}

const NavMobileItem = (props: Props) => {
    const color = ColorEnum.Primary_BlueTone3;

    return (
        <Link className={styles.navigation} href={props.href}>
            <img
                src={props.active ? props.pinkImage : props.image}
                className={styles.neutral}
                alt="photo"
            />
            <span
                style={{ color: props.active ? color : '' }}
                className={styles.color}
            >
                {props.title}
            </span>
        </Link>
    );
};

export default NavMobileItem;
