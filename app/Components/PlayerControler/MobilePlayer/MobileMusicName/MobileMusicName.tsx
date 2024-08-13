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
                if (image) setFullScreen(!fullScreen);
            }}
        >
            <img
                className={styles.image}
                src={image ? image : '/PlayerControler/Default.svg'}
                alt="photo"
            />
            <Name />
        </div>
    );
};

export default MobileMusicName;
