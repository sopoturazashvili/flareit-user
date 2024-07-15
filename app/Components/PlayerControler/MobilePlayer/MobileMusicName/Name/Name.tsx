import styles from "./Name.module.scss"

interface Props {
    autor:string,
    name:string
}

const Name = (props:Props) => {
    return (
        <div className={styles.nameContainer}>
            <span className={styles.autor}>Believer</span>
            <span className={styles.name}>Imagine Dragons</span>
        </div>
        
    )
}

export default Name