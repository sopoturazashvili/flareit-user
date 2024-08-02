import { useEffect, useState, useCallback } from 'react';
import styles from './TabletMusicInput.module.scss';
import { formatTime } from '@/app/helpers/FormatTime';

interface Props {
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const TabletMusicInput = (props: Props) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);

    const updateTime = useCallback(() => {
        const audio = props.TabletaudioRef.current;
        if (audio) {
            setCurrentTime(audio.currentTime);
            setAudioDuration(audio.duration);
        }
    }, [props.TabletaudioRef]);

    useEffect(() => {
        const audio = props.TabletaudioRef.current;

        if (audio) {
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateTime);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', updateTime);
            };
        }
    }, [updateTime]);
    console.log(currentTime, 'currentTime');

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (props.TabletaudioRef.current) {
            props.TabletaudioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const progressPercent = audioDuration
        ? (currentTime / audioDuration) * 100
        : 0;

    return (
        <div className={styles.tabletMusicInput}>
            <input
                type="range"
                className={styles.tabletInputRange}
                value={currentTime}
                min={0}
                max={audioDuration || 0}
                onChange={handleSeek}
                style={{
                    background: `linear-gradient(to right, #5E4BE2 ${progressPercent}%, #292929 ${progressPercent}%)`,
                }}
            />
            <div className={styles.musicTime}>
                <span className={styles.time}>{formatTime(currentTime)}</span>
                <span className={styles.time}>{formatTime(audioDuration)}</span>
            </div>
        </div>
    );
};

export default TabletMusicInput;
