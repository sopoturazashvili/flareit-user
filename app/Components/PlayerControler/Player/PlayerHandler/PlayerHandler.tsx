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
    musicId,
} from '@/app/state';
import axios from 'axios';

const PlayerHandler = () => {
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [isPlaying] = useRecoilState(isPlayingState);
    const [, setCurrentTime] = useRecoilState(currentTimeState);
    const [, setAudioDuration] = useRecoilState(audioDurrationState);
    const [globalId] = useRecoilState(musicId);
    const [index, setIndex] = useRecoilState(indexState);
    const [shouldAddTime, setShouldAddTime] =
        useRecoilState(shouldAddTimeState);
    const [shouldRewind, setShouldRewind] = useRecoilState(shouldRewindState);
    const [volume] = useRecoilState(volumeState);
    const [muted] = useRecoilState(mutedState);

    const audioRef = useRef<HTMLAudioElement>(null);
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

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
        const audio = audioRef.current;

        if (audio) {
            if (isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }, [isPlaying]);
    useEffect(() => {
        const audio = audioRef.current;

        if (audio && musicSrc[index]?.audioUrl) {
            if (audio.src !== musicSrc[index].audioUrl) {
                audio.src = musicSrc[index].audioUrl;
                audio.currentTime = 0;
            }

            if (isPlaying) {
                audio.play().catch((error) => {
                    console.error('Failed to play audio:', error);
                });
            } else {
                audio.pause();
            }
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

    useEffect(() => {
        if (token && musicSrc[index]?.id) {
            axios
                .post(
                    'https://enigma-wtuc.onrender.com/listen-records',
                    { musicId: musicSrc[index].id },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                )
                .catch((error) =>
                    console.error('Failed to post listen record:', error),
                );
        }
    }, [index, globalId, musicSrc, token]);

    return <audio ref={audioRef} />;
};

export default PlayerHandler;
