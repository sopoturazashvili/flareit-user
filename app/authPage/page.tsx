'use client';

import { useForm } from 'react-hook-form';
import Input from '../Components/Input/Input';
import styles from './page.module.scss';

interface FormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

const authPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<FormInputs>();

    const onSubmit = (values: FormInputs) => {
        console.log(values);
    };
    return (
        <div className={styles.authPage}>
            <video className={styles.backgroundVideo} autoPlay muted loop>
                <source src="/authPage/authBlue.mp4" />
            </video>
            <div className={styles.container}>
                <div className={styles.authPageContaiener}>
                    <div className={styles.flareIt}>
                        <img
                            className={styles.flareItPhoto}
                            src="/authPage/authFlareIt.svg"
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                    >
                        <div className={styles.emileContainer}>
                            <p className={styles.passwordColor}>Enter email</p>
                            <Input
                                placeholder={'Enter Email'}
                                register={register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                submitted={isSubmitted}
                                error={errors.email?.message}
                            />
                        </div>
                        <div className={styles.passwordContainer}>
                            <p className={styles.passwordColor}>
                                Enter password
                            </p>
                            <Input
                                placeholder={'Enter Password'}
                                register={register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be at least 8 characters long',
                                    },
                                })}
                                submitted={isSubmitted}
                                type={'password'}
                                error={errors.password?.message}
                            />
                        </div>
                    </form>
                    <div className={styles.checkboxContaeiner}>
                        <input
                            className={styles.checkboxPointer}
                            type="checkbox"
                        />
                        <p className={styles.checkboxColor}>
                            Remember password
                        </p>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.inputSubbmit}>
                            <input
                                className={styles.input}
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </div>
                    <div className={styles.anotherAccountContainer}>
                        <p className={styles.anotherAccount}>
                            Don’t have an account? sign up{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default authPage;
