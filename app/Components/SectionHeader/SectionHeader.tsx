import FillAndTextButton from '../FillButton/FillAndTextButton';
import styles from './SectionHeader.module.scss'

interface Props {
    title: string;
    href:string
}

const SectionHeader = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.text}>{props.title}</div>
            <div>
                <FillAndTextButton text={'See All'} fill={false} href={props.href} />
            </div>
        </div>
    )
}

export default SectionHeader;