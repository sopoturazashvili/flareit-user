import FillAndTextButton from '../FillButton/FillAndTextButton';
import styles from './SectionHeader.module.scss'

interface Props {
    title: string;
}

const SectionHeader = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.text}>{props.title}</div>
            <div>
                <FillAndTextButton text={'See All'} fill={false} onClick={} />
            </div>
        </div>
    )
}

export default SectionHeader;