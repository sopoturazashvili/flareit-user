import { useRecoilState } from 'recoil';
import { currentIndexState } from '@/app/state';
import { playNext } from '@/app/helpers/PlayNext';

interface Props {
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const RightSwitch = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);

    const handleNextTrack = () => {
        if (props.TabletaudioRef.current) {
            const next = playNext(currentIndex, props.TabletaudioRef);
            setCurrentIndex(next?.newIndex || 0);
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
