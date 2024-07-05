import Link from "next/link"
import styles from "./NavDesktopItem.module.scss"
import { ColorEnum } from "@/app/enums/colors.enum";

interface Props {
    image: string;
    title: string;
    href: string;
    active: boolean
}

const NavDesktopItem = (props: Props) => {
    const color = ColorEnum.Primary_BlueTone3;

    return (
        <Link href={`${props.href}`} className={styles.navigationPink} style={{ backgroundColor: props.active ? color : '' }}>
            <img src={props.image} />
            <p>{props.title}</p>
        </Link>
    )
}

export default NavDesktopItem