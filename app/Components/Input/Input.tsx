import { useState } from 'react';
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
    const [showPassword, setShowPassword] = useState(false);
    const classNames = [styles.inputWrapper];

    if (props.submitted) {
        classNames.push(props.error ? styles.error : styles.validate);
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={styles.container}>
            <div className={classNames.join(' ')}>
                <div className={styles.eyes}>
                    <input
                        type={
                            props.type === 'password' && !showPassword
                                ? 'password'
                                : 'text'
                        }
                        placeholder={props.placeholder}
                        className={styles.input}
                        {...props.register}
                    />
                    {props.type === 'password' && (
                        <img
                            className={styles.icon}
                            src={
                                showPassword
                                    ? '/images/blockeyes.svg'
                                    : '/images/eyes.svg'
                            }
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                            alt="Toggle password visibility"
                        />
                    )}
                </div>
            </div>
            {props.error && <p className={styles.errorText}>{props.error}</p>}
        </div>
    );
};

export default Input;
