// src/components/VolumeInput/VolumeInput.tsx

import styles from './VolumeInput.module.scss';
import { mutedState, volumeState } from '@/app/state';
import { useRecoilState } from 'recoil';

interface Props {
    width: number;
}

const VolumeInput = (props: Props) => {
    const [volume, setVolume] = useRecoilState(volumeState);
    const [muted] = useRecoilState(mutedState);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value); // 0 to 100
        setVolume(newVolume);
    };

    const progressPercent = muted ? 0 : volume; // Volume is in percentage
    const trackStyle = {
        background: `linear-gradient(to right, #5E4BE2 ${progressPercent}%, #292929 ${progressPercent}%)`,
    };

    return (
        <div
            className={styles.inputContainer}
            style={{ width: `${props.width}px` }}
        >
            <input
                type="range"
                min={0}
                max={100}
                value={muted ? 0 : volume} // 0 to 100
                onChange={handleVolumeChange}
                className={styles.volumeRange}
                style={trackStyle}
            />
        </div>
    );
};

export default VolumeInput;
