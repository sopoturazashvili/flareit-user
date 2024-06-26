import Link from "next/link"
import styles from "./ChartAlbum.module.scss"


interface Props {
    id: number
    img:string,
    title:string
}


const ChartAlbum = (props: Props) => {
    return (
        <Link href={`/page${props.id}`}>
            <div className={styles.AlbumChartContainer}>
                <div className={styles.AlbumChart}>
                    <img src={props.img} />
                    <p className={styles.AlbumHits}>{props.title}</p>
                </div>
            </div>
        </Link>
    )
}

export default ChartAlbum