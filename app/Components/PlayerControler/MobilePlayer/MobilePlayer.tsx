import { useEffect, useRef } from 'react';
import MobileMusicName from './MobileMusicName/MobileMusicName';
import MobileMusicSwitch from './MobileMusicSwitch/MobileMusicSwitch';
import styles from './MobilePlayer.module.scss';
import { useRecoilState } from 'recoil';
import { currentIndexState, tabletFullScrenState } from '@/app/state';
import TabletFullScreen from '../TabletFullScreen/TabletFullScreen';
import { musicData } from '@/app/helpers/MusicData';

const MobilePlayer = () => {
    const [currentIndex] = useRecoilState(currentIndexState);
    const [fullScreen, setFullScreen] = useRecoilState(tabletFullScrenState);
    const MobileaudioRef = useRef<HTMLAudioElement>(null);

    return (
        <>
            <div className={styles.mobilePlayer}>
                <audio
                    ref={MobileaudioRef}
                    src={musicData[currentIndex]?.src}
                />
                <div className={styles.mobilePlayerContainer}>
                    <MobileMusicName
                        setFullScreen={setFullScreen}
                        fullScreen={fullScreen}
                        image={''}
                    />
                    <MobileMusicSwitch MobileaudioRef={MobileaudioRef} />
                </div>
            </div>
            {fullScreen && <TabletFullScreen tabletaudioRef={MobileaudioRef} />}
        </>
    );
};

export default MobilePlayer;
