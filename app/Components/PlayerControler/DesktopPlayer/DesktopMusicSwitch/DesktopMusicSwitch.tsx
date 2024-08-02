import styles from './DesktopMusicSwitch.module.scss';
import { useRecoilState } from 'recoil';
import { currentTimeState, isPlayingState } from '@/app/state';
import LeftSwitch from './LeftSwitch/LeftSwitch';
import RightSwitch from './RightSwitch/RightSwitch';
import DesktopRightTwist from './DesktopRightTwist/DesktopRightTwist';
import DesktopLeftTwist from './DesktopLeftTwist/DesktopLeftTwist';

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const DesktopMusicSwitch = (props: Props) => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [currentIndex, setCurrentTime] = useRecoilState(currentTimeState);
    console.log(currentIndex, 'index');
    console.log(isPlaying, 'isPlaying');

    const playPause = () => {
        const audio = props.audioRef.current;
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
        <div className={styles.musicSwitch}>
            <LeftSwitch />
            <DesktopLeftTwist
                audioRef={props.audioRef}
                setCurrentTime={setCurrentTime}
            />
            <div className={styles.playPaus} onClick={playPause}>
                {isPlaying ? (
                    <img src="/PlayerControler/Play.svg" alt="Play" />
                ) : (
                    <img src="/PlayerControler/Pause.svg" alt="Pause" />
                )}
            </div>
            <DesktopRightTwist
                audioRef={props.audioRef}
                setCurrentTime={setCurrentTime}
            />
            <RightSwitch audioRef={props.audioRef} />
        </div>
    );
};

export default DesktopMusicSwitch;
