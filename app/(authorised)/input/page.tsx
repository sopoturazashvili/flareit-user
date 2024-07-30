import Input from '@/app/Components/Input/Input';
import styles from './page.module.scss'
import { useForm } from 'react-hook-form';

interface FormInputs {
    email: string;
    password: string;
}

const InputPage = () => {
    const { register, formState: { errors, isSubmitted }, watch } = useForm<FormInputs>();

    const emailRegister = register('email', {
        required: true,
        pattern: /\S+@\S+\.\S+/,
    })

    const passwordRegister = register('password', {
        required: true,
        minLength: 8,
        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/,
    })

    return (
        <div>
            <Input placeholder={'Enter email'} register={emailRegister} />
        </div>
    )
}

export default InputPage;