import styles from "./MobileList.module.scss";
import Link from "next/link";
import { ColorEnum } from "@/app/enums/colors.enum";

interface Props {
    title: string,
    image: string,
    pinkImage?: string,
    href: string,
    active:boolean
}

const MobileList = (props: Props) => {
    const color = ColorEnum.Primary_BlueTone3

    return (
        <Link className={styles.navigation} href={props.href}>
            <img src={ props.active ? props.pinkImage : props.image} className={styles.neutral} />
            <span style={{ color: props.active ? color : '' }} className={styles.color}>
                {props.title}
            </span>
        </Link>
    )
}

export default MobileList







