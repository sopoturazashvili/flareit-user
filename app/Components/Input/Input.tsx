import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';

interface Props {
    placeholder: string;
    register: UseFormRegisterReturn;
    type?: string;
    error?: string;
    submitted: boolean;
}

const Input = (props: Props) => {
    const classNames = [styles.inputWrapper];

    if (props.submitted) {
        if (props.error) {
            classNames.push(styles.error);
        } else {
            classNames.push(styles.valid);
        }
    }

    return (
        <div className={classNames.join(' ')}>
            <input
                type={props.type === 'password' ? 'password' : ''}
                placeholder={props.placeholder}
                className={styles.input}
                {...props.register}
            />
            {props.error && <p className={styles.errorText}>{props.error}</p>}
        </div>
    );
};

export default Input;
