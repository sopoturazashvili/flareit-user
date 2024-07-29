import { useRecoilState } from 'recoil';
import styles from './FullScreenImage.module.scss';
import { tabletFullScrenState } from '@/app/state';

interface Props {
    image: string;
}

const FullScreenImage = (props: Props) => {
    const [fullScreen, setFullScreen] = useRecoilState(tabletFullScrenState);

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
            <img className={styles.image} src={props.image} alt="photo" />
        </div>
    );
};

export default FullScreenImage;
