import { useRecoilState } from 'recoil';
import { currentIndexState } from '@/app/state';
import { playNext } from '@/app/helpers/PlayNext';
import { useCallback, useEffect } from 'react';

interface Props {
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const RightSwitch = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);

    const handleNextTrack = useCallback(async () => {
        if (props.TabletaudioRef.current) {
            const next = playNext(currentIndex, props.TabletaudioRef);
            const newIndex = next?.newIndex || 0;
            setCurrentIndex(newIndex);

            await new Promise((resolve) => setTimeout(resolve, 0));

            if (props.TabletaudioRef.current) {
                props.TabletaudioRef.current.play();
            }
        }
    }, [currentIndex, props.TabletaudioRef, setCurrentIndex]);
    return (
        <img
            src="/PlayerControler/RightTwist.svg"
            alt="Right Twist"
            onClick={() => handleNextTrack()}
        />
    );
};

export default RightSwitch;
