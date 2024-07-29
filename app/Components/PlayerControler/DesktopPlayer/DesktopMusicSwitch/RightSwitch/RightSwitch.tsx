import React from 'react';
import { useRecoilState } from 'recoil';
import { currentIndexState, isPlayingState } from '@/app/state';
import { playNext } from '@/app/helpers/PlayNext';

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const RightSwitch = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const [, setIsPlaying] = useRecoilState(isPlayingState);

    const handleNextTrack = () => {
        if (props.audioRef.current) {
            const next = playNext(currentIndex, props.audioRef);
            setCurrentIndex(next?.newIndex || 0);
            setIsPlaying(true);
        }
    };

    return (
        <img
            src="/PlayerControler/RightTwist.svg"
            alt="Right Twist"
            onClick={() => handleNextTrack()}
        />
    );
};

export default RightSwitch;
