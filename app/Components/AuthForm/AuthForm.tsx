import styles from './AuthForm.module.scss';
import Input from '@/app/Components/Input/Input';
import { useForm } from 'react-hook-form';

interface FormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<FormInputs>();
    const onSubmit = (value: FormInputs) => {
        console.log(value);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.emileContainer}>
                <p className={styles.passwordColor}>Enter email</p>
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
            <div className={styles.passwordContainer}>
                <p className={styles.passwordColor}>Enter password</p>
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
            <div className={styles.checkboxContaeiner}>
                <input className={styles.checkboxPointer} type="checkbox" />
                <p className={styles.checkboxColor}>Remember password</p>
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
        </form>
    );
};
export default AuthForm;
