import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import {
    audioDurrationState,
    currentTimeState,
    isPlayingState,
    musicGlobalState,
    indexState,
    shouldAddTimeState,
    shouldRewindState,
    volumeState,
    mutedState,
} from '@/app/state';

const PlayerHandler = () => {
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [isPlaying] = useRecoilState(isPlayingState);
    const [, setCurrentTime] = useRecoilState(currentTimeState);
    const [, setAudioDuration] = useRecoilState(audioDurrationState);
    const [index, setIndex] = useRecoilState(indexState);
    const [shouldAddTime, setShouldAddTime] =
        useRecoilState(shouldAddTimeState);
    const [shouldRewind, setShouldRewind] = useRecoilState(shouldRewindState);
    const [volume] = useRecoilState(volumeState);
    const [muted] = useRecoilState(mutedState);

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            if (audio) {
                setCurrentTime(audio.currentTime);
            }
        };

        const setDuration = () => {
            if (audio) {
                setAudioDuration(audio.duration);
            }
        };

        const handleEnded = () => {
            setIndex((prevIndex) => (prevIndex + 1) % musicSrc.length);
        };

        if (audio) {
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', setDuration);
            audio.addEventListener('ended', handleEnded);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', setDuration);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [setCurrentTime, setAudioDuration, setIndex, musicSrc.length]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.src = musicSrc[index];
            audio.currentTime = 0;
            audio.play();
        }
    }, [index, musicSrc]);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            if (shouldAddTime) {
                audio.currentTime = Math.min(
                    audio.currentTime + 5,
                    audio.duration,
                );
                setShouldAddTime(false);
            } else if (shouldRewind) {
                audio.currentTime = Math.max(audio.currentTime - 5, 0);
                setShouldRewind(false);
            }
        }
    }, [shouldAddTime, shouldRewind, setShouldAddTime, setShouldRewind]);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.volume = muted ? 0 : volume / 100;
        }
    }, [volume, muted]);

    return (
        <>
            <audio ref={audioRef} />
        </>
    );
};

export default PlayerHandler;
