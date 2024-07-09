import styles from './ModelConfirmation.module.scss'

interface Props {
    text: string;
}

const ModalConfirmation = (props: Props) => {
    return (
        <div>
            <h4 className={styles.text}>{props.text}</h4>
        </div>
    )
}

export default ModalConfirmation;