import Link from "next/link"
import styles from "./NavList.module.scss"

interface Props {
    image: string;
    title: string;
    href: string;
    active : boolean
}

const NavList = (props: Props) => {
    const color = '#5E4BE2';

return (
    <Link href={`${props.href}`} className={styles.navigationPink} style={{ backgroundColor: props.active ? color : '' }}>
        <img src={props.image} />
        <p>{props.title}</p>
    </Link>
)
}

export default NavList