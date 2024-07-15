import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Input.module.scss';

interface Input {
    email: string;
}

interface Props {
    type: 'email' | 'password';
}

const Input = (props : Props) => {
    const { register, handleSubmit, formState: { errors, isSubmitted }, watch} = useForm<Input>();

    const emailValue = watch('email', '');

    const classNames = [styles.inputWrapper];

    if (isSubmitted) {
        if (errors.email || emailValue === '') {
            classNames.push(styles.error);
        } else {
            classNames.push(styles.valid);
        }
    }

    const onRegister: SubmitHandler<Input> = (values: Input) => {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(onRegister)} className={classNames.join(' ')}>
            <input placeholder='Enter email'
                className={styles.input}
                {...register('email', {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                })}
            />
            <input type="submit" className={styles.btn} value="Sign In" />
            
        </form> 
    );

    
}

export default Input;
