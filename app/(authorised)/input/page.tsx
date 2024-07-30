'use client'

import Input from '@/app/Components/Input/Input';
import styles from './page.module.scss';
import { useForm } from 'react-hook-form';

interface FormInputs {
    email: string;
    password: string;
}

const InputPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormInputs>();

    const onSubmit = (values: FormInputs) => {
        console.log(values);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input
                    placeholder="Enter email"
                    register={register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email address'
                        }
                    })}
                    type="email"
                    error={errors.email?.message} submitted={isSubmitted}                />
                <Input
                    placeholder="Enter password"
                    register={register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long'
                        },
                        pattern: {
                            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/,
                            message: 'Password must include uppercase, lowercase, and a number'
                        }
                    })}
                    type="password"
                    error={errors.password?.message} submitted={isSubmitted}                />
                <input type="submit" className={styles.btn} value="Sign In" />
            </form>
        </div>
    );
};

export default InputPage;
