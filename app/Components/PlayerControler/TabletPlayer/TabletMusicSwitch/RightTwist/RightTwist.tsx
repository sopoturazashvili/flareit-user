import { Twistt } from '@/app/helpers/Twist';

interface Props {
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const RightTwist = (props: Props) => {
    return (
        <img
            src="/PlayerControler/RightSwitch.svg"
            alt="Right Twist"
            onClick={() =>
                Twistt('forward', props.TabletaudioRef, props.setCurrentTime)
            }
        />
    );
};

export default RightTwist;
