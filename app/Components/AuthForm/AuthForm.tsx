'use client';

import { AuthInputs, Response } from '@/app/interfaces/item';
import styles from './AuthForm.module.scss';
import Input from '@/app/Components/Input/Input';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import {
    setLocalStorageEncrypted,
    getLocalStorageDecrypted,
    setCookie,
} from '@/app/helpers/Cookies';
import apiInstance from '@/app/ApiInstance';

const AuthForm = () => {
    const [fail, setFail] = useState<string | null>(null);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
        setValue,
    } = useForm<AuthInputs>();

    const router = useRouter();

    useEffect(() => {
        const savedEmail = getLocalStorageDecrypted('email');
        const savedPassword = getLocalStorageDecrypted('password');

        if (savedEmail) {
            setValue('email', savedEmail);
        }
        if (savedPassword) {
            setValue('password', savedPassword);
        }
    }, [setValue]);

    const onSubmit = (values: AuthInputs) => {
        apiInstance
            .post<Response>('/auth/login', values)
            .then((response: AxiosResponse<Response>) => {
                const token = response.data.access_token;

                if (token) {
                    if (rememberMe) {
                        setLocalStorageEncrypted('email', values.email);
                        setLocalStorageEncrypted('password', values.password);
                    } else {
                        localStorage.removeItem('email');
                        localStorage.removeItem('password');
                    }
                    setCookie('token', token, rememberMe ? 30 : 0);
                    router.push('/');
                }
            })
            .catch((error: AxiosError) => {
                console.error('Error sending data:', error);

                if (error.response?.status === 401) {
                    setFail('Invalid email or password. Please try again.');
                } else {
                    setFail('Something went wrong. Please try again.');
                }
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.emailContainer}>
                <p className={styles.title}>Enter email</p>
                <Input
                    placeholder="Enter Email"
                    register={register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email address',
                        },
                    })}
                    submitted={isSubmitted}
                />
                {errors.email && (
                    <span className={styles.fail}>{errors.email.message}</span>
                )}
            </div>
            <div className={styles.passwordContainer}>
                <p className={styles.title}>Enter password</p>
                <Input
                    placeholder="Enter Password"
                    register={register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message:
                                'Password must be at least 8 characters long',
                        },
                    })}
                    submitted={isSubmitted}
                    type="password"
                />
                {errors.password && (
                    <span className={styles.fail}>
                        {errors.password.message}
                    </span>
                )}
            </div>
            <div className={styles.rememberMeContainer}>
                <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className={styles.checkmark}></span>
                    {'Remember Password'}
                </label>
            </div>
            {fail && (
                <div className={styles.errorContainer}>
                    <span className={styles.fail}>{fail}</span>
                </div>
            )}
            <div className={styles.inputContainer}>
                <div className={styles.inputSubmit}>
                    <input
                        className={styles.input}
                        type="submit"
                        value="Sign In"
                    />
                </div>
            </div>
        </form>
    );
};

export default AuthForm;
