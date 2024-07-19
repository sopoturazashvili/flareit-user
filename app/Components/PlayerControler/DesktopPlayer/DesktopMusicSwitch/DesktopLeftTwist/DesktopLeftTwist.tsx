import { Twistt } from "@/app/helpers/Twist";
import styles from "./DesktopLeftTwist.module.scss";

interface Props {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const DesktopLeftTwist = (props: Props) => {
  return (
    <img
      src="/PlayerControler/LeftTwist.svg"
      alt="Left Twist"
      onClick={() => Twistt("backward", props.audioRef, props.setCurrentTime)}
    />
  );
};

export default DesktopLeftTwist;
