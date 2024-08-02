import { useRecoilState } from 'recoil';
import LeftSwitch from '../../TabletPlayer/TabletMusicSwitch/LeftSwitch/LeftSwitch';
import LeftTwist from '../../TabletPlayer/TabletMusicSwitch/LeftTwist/LeftTwist';
import RightSwitch from '../../TabletPlayer/TabletMusicSwitch/RightSwitch/RightSwitch';
import RightTwist from '../../TabletPlayer/TabletMusicSwitch/RightTwist/RightTwist';
import styles from './MobileMusicSwitch.module.scss';
import { currentTimeState, isPlayingMobileState } from '@/app/state';

interface Props {
    MobileaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const MobileMusicSwitch = (props: Props) => {
    const [, setCurrentTime] = useRecoilState(currentTimeState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingMobileState);

    console.log(isPlaying, 'mobile');

    const playPause = () => {
        const audio = props.MobileaudioRef.current;
        if (audio) {
            setIsPlaying(!isPlaying);
            if (!isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    };
    return (
        <div className={styles.mobileSwitch}>
            <LeftSwitch />
            <LeftTwist
                setCurrentTime={setCurrentTime}
                TabletaudioRef={props.MobileaudioRef}
            />
            <div className={styles.playPause} onClick={playPause}>
                {isPlaying ? (
                    <img src="/PlayerControler/Play.svg" alt="Play" />
                ) : (
                    <img src="/PlayerControler/Pause.svg" alt="Pause" />
                )}
            </div>
            <RightTwist
                setCurrentTime={setCurrentTime}
                TabletaudioRef={props.MobileaudioRef}
            />
            <RightSwitch TabletaudioRef={props.MobileaudioRef} />
        </div>
    );
};

export default MobileMusicSwitch;
