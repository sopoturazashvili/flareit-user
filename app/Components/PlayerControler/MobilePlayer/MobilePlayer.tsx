import MobileMusicName from './MobileMusicName/MobileMusicName';
import styles from './MobilePlayer.module.scss';
import { useRecoilState } from 'recoil';
import { fullScreenState } from '@/app/state';
import TabletFullScreen from '../TabletFullScreen/TabletFullScreen';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';

const MobilePlayer = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);

    return (
        <>
            <div className={styles.mobilePlayer}>
                <div className={styles.mobilePlayerContainer}>
                    <MobileMusicName />
                    <DesktopMusicSwitch />
                </div>
            </div>
            {fullScreen && <TabletFullScreen />}
        </>
    );
};

export default MobilePlayer;
