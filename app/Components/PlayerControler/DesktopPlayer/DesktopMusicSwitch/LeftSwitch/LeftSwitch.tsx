import { useRecoilState } from 'recoil';
import { currentIndexState, isPlayingState } from '@/app/state';
import { musicData } from '@/app/helpers/MusicData';

const LeftSwitch = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const [, setIsPlaying] = useRecoilState(isPlayingState);

    const playPrevious = () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = musicData.length - 1;
        }
        setCurrentIndex(newIndex);
        setIsPlaying(true);
    };

    return (
        <img
            src="/PlayerControler/LeftSwitch.svg"
            alt="Left Switch"
            onClick={() => {
                playPrevious();
            }}
        />
    );
};

export default LeftSwitch;
