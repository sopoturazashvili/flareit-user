import styles from './PlayListInput.module.scss';

interface Props {
    onChange?: (value: string) => void;
}

const PlayListInput = (props: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(e.target.value);
    };

    return (
        <div className={styles.playlist}>
            <span className={styles.title}>Add playlist Title</span>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="add title"
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default PlayListInput;
