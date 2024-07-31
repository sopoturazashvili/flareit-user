'use client';

import { useForm } from 'react-hook-form';
import styles from './page.module.scss';
import Input from '@/app/Components/Input/Input';

interface FormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

const InputPage = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<FormInputs>();

    const onSubmit = (values: FormInputs) => {
        console.log(values);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                    type={'email'}
                    error={errors.email?.message}
                />
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
                <Input
                    placeholder={'Confirm Password'}
                    register={register('confirmPassword', {
                        required: 'Password confirmation is required',
                        validate: {
                            matchesPassword: (value) =>
                                value === getValues().password ||
                                'Passwords do not match',
                        },
                    })}
                    submitted={isSubmitted}
                    type={'password'}
                    error={errors.confirmPassword?.message}
                />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default InputPage;
