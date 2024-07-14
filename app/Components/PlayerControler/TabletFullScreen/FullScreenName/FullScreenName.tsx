import styles from "./FullScreenName.module.scss"

interface Props {
    autor:string,
    Name:string
}

const FullScreenName = (props:Props) => {
    return (
        <div>
            <p className={styles.nameContainer}>{props.Name}</p>
            <p className={styles.autorContainer}>{props.autor}</p>
        </div>
    )
}

export default FullScreenName