import styles from './RegisterForm.module.scss';
import Input from '@/app/Components/Input/Input';
import { useForm } from 'react-hook-form';

interface FormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm = () => {
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
                    error={errors.email?.message}
                />
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
                    error={errors.password?.message}
                />
            </div>
            <div className={styles.emailContainer}>
                <p className={styles.title}>Confirm Password</p>
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
            </div>
            <div className={styles.checkboxContainer}>
                <input className={styles.checkboxPointer} type="checkbox" />
                <p className={styles.checkboxTitle}>Remember password</p>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputSubmit}>
                    <input
                        className={styles.input}
                        type="submit"
                        value="Sign Up"
                    />
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
