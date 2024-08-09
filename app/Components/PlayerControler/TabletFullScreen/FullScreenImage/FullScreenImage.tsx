import { useRecoilState } from 'recoil';
import styles from './FullScreenImage.module.scss';
import { fullScreenState, globalImageState } from '@/app/state';



const FullScreenImage = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);

    const fullFunc = () => {
        setFullScreen(!fullScreen);
    };

    return (
        <div className={styles.fullScreenImage}>
            <img
                className={styles.backButton}
                src="/PlayerControler/TabletBackButton.svg"
                alt="TabletBackButton"
                onClick={() => {
                    fullFunc();
                }}
            />
            <img className={styles.image} src={image} alt="photo" />
        </div>
    );
};

export default FullScreenImage;
