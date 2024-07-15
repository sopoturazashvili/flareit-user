import { Twistt } from "@/app/helpers/Twist"
import styles from "./DesktopRightTwist.module.scss"

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    setCurrentTime?: any,
}

const DesktopRightTwist = (props: Props) => {
    return (
        <img src="/PlayerControler/RightSwitch.svg" alt="Right Twist" onClick={() => Twistt("forward", props.audioRef, props.setCurrentTime)} />
    )
}

export default DesktopRightTwist