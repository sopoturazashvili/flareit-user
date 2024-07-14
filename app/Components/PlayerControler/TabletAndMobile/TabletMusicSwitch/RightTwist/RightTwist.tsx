import { Twistt } from "@/app/helpers/Twist"
import styles from "./RightTwist.module.scss"



interface Props {
    setCurrentTime:any,
    TabletaudioRef:React.MutableRefObject<HTMLAudioElement | null> 
}


const RightTwist = (props:Props) =>{
    return(
        <img src="/PlayerControler/RightSwitch.svg" alt="Right Twist" onClick={() => Twistt("forward",props.TabletaudioRef,props.setCurrentTime)} />
    )
}

export default RightTwist