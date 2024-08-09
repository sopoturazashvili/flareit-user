import { useRecoilState } from 'recoil';
import styles from './MobileMusicName.module.scss';
import Name from './Name/Name';
import { fullScreenState, globalImageState } from '@/app/state';

const MobileMusicName = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);
    return (
        <div
            className={styles.nameContainer}
            onClick={() => {
                setFullScreen(!fullScreen);
            }}
        >
            <img className={styles.image} src={image} alt="photo" />
            <Name />
        </div>
    );
};

export default MobileMusicName;
