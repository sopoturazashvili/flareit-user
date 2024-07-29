import { Twistt } from '@/app/helpers/Twist';

interface Props {
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const LeftTwist = (props: Props) => {
    return (
        <img
            src="/PlayerControler/LeftTwist.svg"
            alt="Left Twist"
            onClick={() =>
                Twistt('backward', props.TabletaudioRef, props.setCurrentTime)
            }
        />
    );
};

export default LeftTwist;
