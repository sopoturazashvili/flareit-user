'use client';

import { ErrorResponse, RegisterInputs } from '@/app/interfaces/item';
import styles from './RegisterForm.module.scss';
import Input from '@/app/Components/Input/Input';
import { AxiosError, isAxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import apiInstance from '@/app/ApiInstance';

const RegisterForm = () => {
    const [fail, setFail] = useState<string | null>(null);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<RegisterInputs>();

    const onSubmit = async (values: RegisterInputs) => {
        try {
            await apiInstance.post('/users', values);
            window.location.href = '/auth';
        } catch (error) {
            if (isAxiosError(error)) {
                const axiosError = error as AxiosError;

                if (axiosError.response) {
                    const responseData = axiosError.response
                        .data as ErrorResponse;

                    if (responseData.message === 'User exists') {
                        setFail('Account with this email already exists');
                    } else {
                        setFail('Something went wrong. Please try again.');
                    }
                } else if (axiosError.request) {
                    setFail(
                        'No response from the server. Please check your network connection.',
                    );
                } else {
                    setFail('An unexpected error occurred.');
                }
            } else {
                setFail('An unexpected error occurred.');
            }
        }
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
            <div className={styles.emailContainer}>
                <p className={styles.title}>Enter Password</p>
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
            <div className={styles.emailContainer}>
                <p className={styles.title}>Confirm Password</p>
                <Input
                    placeholder="Confirm Password"
                    register={register('confirmPassword', {
                        required: 'Password confirmation is required',
                        validate: {
                            matchesPassword: (value) =>
                                value === getValues().password ||
                                'Passwords do not match',
                        },
                    })}
                    submitted={isSubmitted}
                    type="password"
                />
                {errors.confirmPassword && (
                    <span className={styles.fail}>
                        {errors.confirmPassword.message}
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
                        value="Sign Up"
                    />
                </div>
                <div className={styles.anotherAccountContainer}>
                    <Link className={styles.anotherAccount} href={'/auth'}>
                        do you have account? Sign in
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
