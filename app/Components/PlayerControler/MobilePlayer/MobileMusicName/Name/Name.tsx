import styles from './Name.module.scss';

interface Props {
    autor: string;
    name: string;
}

const Name = (props: Props) => {
    return (
        <div className={styles.nameContainer}>
            <span className={styles.autor}>{props.autor}</span>
            <span className={styles.name}>{props.name}</span>
        </div>
    );
};

export default Name;
