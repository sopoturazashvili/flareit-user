import styles from "./PlayListInput.module.scss"

const PlayListInput = () => {
    return (
        <div className={styles.playlist}>
            <span className={styles.title}>Add playlist Title</span>
            <div className={styles.inputContainer}>
                <input className={styles.input} type="text" placeholder="add title" />
            </div>
        </div>
    )
}

export default PlayListInput