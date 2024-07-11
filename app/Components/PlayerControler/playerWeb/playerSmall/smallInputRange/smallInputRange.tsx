import styles from "./SmallInputRange.module.scss"

interface Props {
    time:string,
}

const SmallInputRange = (props:Props) => {
    return (
        <div className={styles.inputContainer}>
            <input type="range" className={styles.inputRange}/>
            <div className={styles.musicTimeCont}>
                <span className={styles.color}>{props.time}</span>
                <span className={styles.color}>{props.time}</span>
            </div>
        </div>
    )
}

export default SmallInputRange