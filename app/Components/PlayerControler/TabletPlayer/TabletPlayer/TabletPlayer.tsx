import { useEffect, useRef } from 'react';
import TabletMusicInput from '../TabletMusicInput/TabletMusicInput';
import TabletMusicName from '../TabletMusicName/TabletMusicName';
import styles from './TabletPlayer.module.scss';
import { musicData } from '@/app/helpers/MusicData';
import { useRecoilState } from 'recoil';
import TabletMusicSwitch from '../TabletMusicSwitch/TabletMusicSwitch';
import TabeltVolume from '../TabletVolume/TabletVolume';
import { currentIndexState, tabletFullScrenState } from '@/app/state';
import TabletMusicShuffle from '../TabletMusicShuffle/TabletMusicShuffle';
import TabletFullScreen from '../../TabletFullScreen/TabletFullScreen';

const TabletPlayer = () => {
    const [currentIndex] = useRecoilState(currentIndexState);
    const [fullScreen, setFullScreen] = useRecoilState(tabletFullScrenState);
    const TabletaudioRef = useRef<HTMLAudioElement>(null);

    const tabletFullScreen = () => {
        setFullScreen(!fullScreen);
    };
    useEffect(() => {
        TabletaudioRef.current?.play();
    }, []);

    return (
        <>
            <div className={styles.tabletPlayer}>
                <audio ref={TabletaudioRef} src={musicData[currentIndex].src} />
                <div className={styles.tabletPlayerContainer}>
                    <div
                        className={styles.tabletMuscName}
                        onClick={tabletFullScreen}
                    >
                        <TabletMusicName musicName={''} name={''} image={''} />
                    </div>
                    <div className={styles.inputAndSwitch}>
                        <TabletMusicInput TabletaudioRef={TabletaudioRef} />
                        <div className={styles.volumAndSwitch}>
                            <TabeltVolume
                                TabletaudioRef={TabletaudioRef}
                                tabletWidth={68}
                                tabletInvolved={'none'}
                                tabletVolumeWidth={24}
                                tabletVolumeHeight={24}
                            />
                            <TabletMusicSwitch
                                TabletaudioRef={TabletaudioRef}
                            />
                            <TabletMusicShuffle />
                        </div>
                    </div>
                </div>
            </div>
            {fullScreen && <TabletFullScreen tabletaudioRef={TabletaudioRef} />}
        </>
    );
};

export default TabletPlayer;
