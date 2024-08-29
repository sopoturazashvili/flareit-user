import styles from './AuthForm.module.scss';
import Input from '@/app/Components/Input/Input';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormInputs {
    email: string;
    password: string;
}

interface Response {
    access_token: string;
}

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<FormInputs>();

    const router = useRouter();

    const onSubmit = (values: FormInputs) => {
        axios
            .post<Response>(
                'https://enigma-wtuc.onrender.com/auth/login',
                values,
            )
            .then((response: AxiosResponse<Response>) => {
                console.log('Data sent successfully:', response.data);

                const token = response.data.access_token;

                if (token) {
                    localStorage.setItem('token', token);
                    console.log('Token saved in localStorage:', token);
                    router.push('/');
                }
            })
            .catch((error: AxiosError) => {
                console.error('Error sending data:', error);
            });
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
            <div className={styles.inputContainer}>
                <div className={styles.inputSubbmit}>
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
