import { Twistt } from "@/app/helpers/Twist"
import styles from "./LeftTwist.module.scss"

interface Props {
    setCurrentTime: any,
    TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>
}

const LeftTwist = (props: Props) => {
    return (
        <img src="/PlayerControler/LeftTwist.svg" alt="Left Twist" onClick={() => Twistt("backward", props.TabletaudioRef, props.setCurrentTime)} />
    )
}

export default LeftTwist