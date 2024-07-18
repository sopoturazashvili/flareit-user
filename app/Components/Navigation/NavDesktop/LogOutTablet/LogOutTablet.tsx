import styles from "./LogOutTablet.module.scss"

interface Props {
    onClick: () => void
    image:string,
    title:string
}

const LogOutTablet = (props:Props) => {
    return(
        <div onClick={props.onClick} className={styles.logOutTablet}>
            <img src={props.image} />
            <p>{props.title}</p>
        </div>
    )
}

export default LogOutTablet