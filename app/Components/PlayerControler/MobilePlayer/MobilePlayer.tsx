import { useEffect, useRef } from "react";
import MobileMusicName from "./MobileMusicName/MobileMusicName"
import MobileMusicSwitch from "./MobileMusicSwitch/MobileMusicSwitch"
import styles from "./MobilePlayer.module.scss"
import { musicData } from "@/app/helpers/MusicData";
import { useRecoilState } from "recoil";
import { currentIndexState } from "@/app/state";

const MobilePlayer = () =>{
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const MobileaudioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        MobileaudioRef?.current?.play();
    }, [currentIndex])

    return(
        <div className={styles.mobilePlayer}>
            <audio ref={MobileaudioRef} src={musicData[currentIndex].src} />
            <div className={styles.mobilePlayerContainer}>
                <MobileMusicName/>
                <MobileMusicSwitch MobileaudioRef={MobileaudioRef}/>
            </div>
        </div>
    )
}

export default MobilePlayer