import { useRecoilState } from 'recoil';
import styles from './TabletVolumeInput.module.scss';
import { mutedState, volumeState } from '@/app/state';

interface Props {
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
    tabletWidth: number;
}

const TabletVolumeInput = (props: Props) => {
    const [volume, setVolume] = useRecoilState(volumeState);
    const [muted] = useRecoilState(mutedState);
    // const [isPlaying] = useRecoilState(isPlayingState);

    const TabletVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (props.TabletaudioRef.current) {
            props.TabletaudioRef.current.volume = newVolume / 100;
        }
    };

    const progressPercent = volume;
    const trackStyle = {
        background: `linear-gradient(to right, #5E4BE2 ${progressPercent}%, #292929 ${progressPercent}%)`,
        height: 'var(--borderRadius, 4px)',
        width: `${props.tabletWidth}px`,
    };

    return (
        <input
            type="range"
            min={0}
            max={100}
            value={muted ? 0 : volume}
            onChange={TabletVolumeChange}
            className={styles.volumeRange}
            style={trackStyle}
        />
    );
};

export default TabletVolumeInput;
