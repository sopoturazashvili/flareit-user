import { useRecoilState } from 'recoil';
import LeftSwitch from './LeftSwitch/LeftSwitch';
import LeftTwist from './LeftTwist/LeftTwist';
import RightSwitch from './RightSwitch/RightSwitch';
import RightTwist from './RightTwist/RightTwist';
import styles from './TabletMusicSwitch.module.scss';
import { currentTimeState, isPlayingTabletState } from '@/app/state';

interface Props {
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const TabletMusicSwitch = (props: Props) => {
    const [, setCurrentTime] = useRecoilState(currentTimeState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingTabletState);

    const playPause = () => {
        const audio = props.TabletaudioRef.current;
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
        <div className={styles.switchContainer}>
            <LeftSwitch />
            <LeftTwist
                setCurrentTime={setCurrentTime}
                TabletaudioRef={props.TabletaudioRef}
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
                TabletaudioRef={props.TabletaudioRef}
            />
            <RightSwitch TabletaudioRef={props.TabletaudioRef} />
        </div>
    );
};

export default TabletMusicSwitch;
