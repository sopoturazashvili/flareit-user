import { useRef, useState } from "react";
import styles from "./SmallVolume.module.scss"
import { mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";



interface Props{ 
    audioRef: any
}

const SmallVolume = (props:Props) => {
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
            <div onClick={mutedFunc} className={styles.volume}>
                <img src={muted ? "/PlayerControler/Volume.svg" : "/PlayerControler/Muted.svg"} alt="Volume" />
                <input type="range" className={styles.volumeRange} />
            </div>
        </div>
    )
}

export default SmallVolume