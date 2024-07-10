import Link from "next/link"
import styles from "./searchAndMap.module.scss"
import Image from "next/image"
interface Props { 
    item:any
}
const SearchMapCont = (props:Props) => {
    return (
        <Link key={props.item.id} className={styles.mapContainer} href={`${props.item.type}/${props.item.id}`}>
            <Image src={props.item.icon} width={20} height={20} alt={"Icon"} />
            <span className={styles.searchAndMapText}>{props.item.word}</span>
        </Link>
    )
}

export default SearchMapCont