import MobileMusicName from './MobileMusicName/MobileMusicName';
import styles from './MobilePlayer.module.scss';
import { musicData } from '@/app/helpers/MusicData';
import { useRecoilState } from 'recoil';
import { tabletFullScrenState } from '@/app/state';
import TabletFullScreen from '../TabletFullScreen/TabletFullScreen';
import DesktopMusicSwitch from '../DesktopMusicSwitch/DesktopMusicSwitch';

const MobilePlayer = () => {
    const [fullScreen, setFullScreen] = useRecoilState(tabletFullScrenState);


    return (
        <>
            <div className={styles.mobilePlayer}>
                <div className={styles.mobilePlayerContainer}>
                    <MobileMusicName
                        setFullScreen={setFullScreen}
                        fullScreen={fullScreen}
                        image={''}
                    />
                    <DesktopMusicSwitch />
                </div>
            </div>
            {fullScreen && <TabletFullScreen />}
        </>
    );
};

export default MobilePlayer;
