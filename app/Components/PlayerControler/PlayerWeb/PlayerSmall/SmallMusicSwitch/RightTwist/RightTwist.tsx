import { useRecoilState } from "recoil";
import styles from "./RightTwist.module.scss"
import { currentIndexState, isPlayingState } from "@/app/state";
import { useRef } from "react";
import { playNext } from "@/app/helpers/PlayNext";



interface Props {
    audioRef: number
    currentIndex: number
}

const RightTwist = (props: Props) => {



    return (
        <>
            <img src="/PlayerControler/RightTwist.svg" alt="Right Twist" onClick={() => playNext(props.audioRef, props.currentIndex)} />
        </>
    )
}

export default RightTwist