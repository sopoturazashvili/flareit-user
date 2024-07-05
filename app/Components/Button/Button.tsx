import styles from './Button.module.scss'

interface Props {
    primary: boolean;
    size?: 'large';
    text: string;
    width: string;
    onClick?: () => void;
}

const Button = (props: Props) => {

    const buttonStyles = {
        width: props.width,
        ...(props.size == 'large' && {padding: '21px 205px', fontSize: '24px', height: '71px'})
    }


    return (
        <button style={buttonStyles} onClick={props.onClick} className={`${styles.btnCommon} ${props.primary ? styles.primary : styles.secondary}`}>{props.text}</button>
    )
}

export default Button