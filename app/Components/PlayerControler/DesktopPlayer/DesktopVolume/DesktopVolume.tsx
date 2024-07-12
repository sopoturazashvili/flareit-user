import { useRef, useState } from "react";
import styles from "./DesktopVolume.module.scss"
import { mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";
import VolumeInput from "./VolumeInput/VolumeInput";



interface Props{ 
    audioRef: any
}

const DesktopVolume = (props:Props) => {
    const [muted, setMuted] = useRecoilState(mutedState)
    const [volume, seVolume] = useRecoilState(volumeState)

    const mutedFunc = () => {
        const audio = props.audioRef.current;
        if (audio) {
            setMuted(!muted);
            audio.volume = muted ? volume / 100 : 0
        }
    };
    return (
        <div className={styles.volumeContainer}>
            <div className={styles.volume}>
                {muted ? <img src="/PlayerControler/Muted.svg" onClick={mutedFunc}  alt="Muted"/> : <img src="/PlayerControler/Volume.svg"  onClick={mutedFunc} alt="Volume" />}
                <VolumeInput/>
            </div>
        </div>
    )
}

export default DesktopVolume