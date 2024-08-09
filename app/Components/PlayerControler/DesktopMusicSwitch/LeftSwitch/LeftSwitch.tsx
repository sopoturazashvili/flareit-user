import { useRecoilState } from 'recoil';
import { indexState } from '@/app/state';
import styles from './LeftSwitch.module.scss';

const LeftSwitch = () => {
    const [index, setIndex] = useRecoilState(indexState);

    const playPrevious = () => {
        setIndex(index - 1);
    };

    return (
        <img
            className={styles.LeftSwitch}
            src="/PlayerControler/LeftSwitch.svg"
            alt="Left Switch"
            onClick={() => {
                playPrevious();
            }}
        />
    );
};

export default LeftSwitch;
