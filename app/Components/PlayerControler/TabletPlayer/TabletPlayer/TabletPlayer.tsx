import TabletMusicName from '../TabletMusicName/TabletMusicName';
import styles from './TabletPlayer.module.scss';
import { useRecoilState } from 'recoil';
import { fullScreenState, globalImageState } from '@/app/state';
import TabletFullScreen from '../../TabletFullScreen/TabletFullScreen';
import DesktopMusicSwitch from '../../DesktopMusicSwitch/DesktopMusicSwitch';
import DesktopInputRange from '../../DesktopPlayer/DesktopInputRange/DesktopInputRange';
import DesktopVolume from '../../DesktopPlayer/DesktopVolume/DesktopVolume';
import Shuffle from '../../Shuffle/Shufle';

const TabletPlayer = () => {
    const [fullScreen, setFullScreen] = useRecoilState(fullScreenState);
    const [image] = useRecoilState(globalImageState);

    const tabletFullScreen = () => {
        setFullScreen(!fullScreen);
    };

    return (
        <>
            <div className={styles.tabletPlayer}>
                <div className={styles.tabletPlayerContainer}>
                    <div
                        className={styles.tabletMuscName}
                        onClick={tabletFullScreen}
                    >
                        <TabletMusicName />
                    </div>
                    <div className={styles.inputAndSwitch}>
                        <DesktopInputRange />
                        <div className={styles.volumAndSwitch}>
                            <DesktopVolume
                                width={68}
                                volumeWidth={24}
                                volumeHeight={24}
                                involved={'none'}
                            />
                            <DesktopMusicSwitch />
                            <Shuffle />
                        </div>
                    </div>
                </div>
            </div>
            {fullScreen && image && <TabletFullScreen />}
        </>
    );
};

export default TabletPlayer;
