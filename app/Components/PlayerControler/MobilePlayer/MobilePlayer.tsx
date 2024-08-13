import MobileMusicName from './MobileMusicName/MobileMusicName';
import styles from './MobilePlayer.module.scss';
import { useRecoilState } from 'recoil';
import { fullScreenState, globalImageState } from '@/app/state';
import TabletFullScreen from '../TabletFullScreen/TabletFullScreen';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';

const MobilePlayer = () => {
    const [fullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);

    return (
        <>
            <div className={styles.mobilePlayer}>
                <div className={styles.mobilePlayerContainer}>
                    <MobileMusicName />
                    <DesktopMusicSwitch />
                </div>
            </div>
            {fullScreen && image && <TabletFullScreen />}
        </>
    );
};

export default MobilePlayer;
