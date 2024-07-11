import { useRef, useState } from "react";
import styles from "./SmallVolume.module.scss"
import { mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";


const SmallVolume = () => { 
    const [muted, setMuted] = useRecoilState(mutedState)
    const [volume,seVolume] = useRecoilState(volumeState)


    const audioRef = useRef<HTMLAudioElement>(null);

    const mutedFunc = () => {
        const audio = audioRef.current;
        if (audio) {
            setMuted(!muted);
            audio.volume = muted ? volume / 100 : 0
        }
    };
    return (
        <div className={styles.volumeContainer}>
            <div>
                <img src={muted ?  "/PlayerControler/Volume.svg" : "/PlayerControler/Muted.svg"} alt="Volume" onClick={mutedFunc}/>
            </div>
            <div>
                <input type="range" className={styles.volumeRange} />
            </div>
        </div>
    )
}

export default SmallVolume