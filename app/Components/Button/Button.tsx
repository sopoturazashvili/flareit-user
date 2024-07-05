import styles from './Button.module.scss'

interface Props {
    content: 'cancel' | 'done' | 'sign in';
    onClick: () => void;
}

const Button = (props: Props) => {
    let btn;

    if(props.content == 'sign in') {
        btn = styles.signIn
    } else if(props.content == 'cancel') {
        btn = styles.cancel
    } else if(props.content == 'done') {
        btn = styles.done
    }

    return (
        <button className={btn} onClick={props.onClick}>{props.content}</button>
    )
}

export default Button