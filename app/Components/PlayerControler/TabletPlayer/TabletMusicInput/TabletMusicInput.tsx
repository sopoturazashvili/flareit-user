import { useEffect, useState } from 'react';
import styles from './TabletMusicInput.module.scss';
import { formatTime } from '@/app/helpers/FormatTime';

interface Props {
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const TabletMusicInput = (props: Props) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);

    useEffect(() => {
        const audio = props.TabletaudioRef.current;

        const updateTime = () => {
            if (audio) {
                setCurrentTime(audio.currentTime);
                setAudioDuration(audio.duration);
            }
        };

        if (audio) {
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateTime);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', updateTime);
            };
        }
    }, [props.TabletaudioRef]);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (props.TabletaudioRef.current) {
            props.TabletaudioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };
    return (
        <div className={styles.tabletMusicInput}>
            <input
                type="range"
                className={styles.tabletInputRange}
                value={currentTime}
                min={0}
                max={audioDuration || 0}
                onChange={handleSeek}
            />
            <div className={styles.musicTime}>
                <span className={styles.time}>{formatTime(currentTime)}</span>
                <span className={styles.time}>{formatTime(audioDuration)}</span>
            </div>
        </div>
    );
};

export default TabletMusicInput;
