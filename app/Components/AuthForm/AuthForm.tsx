'use client';

import { AuthInputs, Response } from '@/app/interfaces/item';
import styles from './AuthForm.module.scss';
import Input from '@/app/Components/Input/Input';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { setCookie } from '@/app/helpers/Cookies';

const AuthForm = () => {
    const [fail, setFail] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<AuthInputs>();

    const router = useRouter();

    const onSubmit = (values: AuthInputs) => {
        axios
            .post<Response>(
                'https://enigma-wtuc.onrender.com/auth/login',
                values,
            )
            .then((response: AxiosResponse<Response>) => {
                const token = response.data.access_token;

                if (token) {
                    setCookie('token', token, 60);
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
