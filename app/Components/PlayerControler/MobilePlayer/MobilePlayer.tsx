import { useEffect, useRef } from "react";
import MobileMusicName from "./MobileMusicName/MobileMusicName"
import MobileMusicSwitch from "./MobileMusicSwitch/MobileMusicSwitch"
import styles from "./MobilePlayer.module.scss"
import { musicData } from "@/app/helpers/MusicData";
import { useRecoilState } from "recoil";
import { currentIndexState, tabletFullScrenState, } from "@/app/state";
import TabletFullScreen from "../TabletFullScreen/TabletFullScreen";

const MobilePlayer = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const [fullScreen, setFullScreen] = useRecoilState(tabletFullScrenState)
    const MobileaudioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        MobileaudioRef?.current?.play();
    }, [currentIndex])

    return (
        <>
            <div className={styles.mobilePlayer}>
                <audio ref={MobileaudioRef} src={musicData[currentIndex].src} />
                <div className={styles.mobilePlayerContainer}>
                    <MobileMusicName setFullScreen={setFullScreen} fullScreen={fullScreen} image={""} />
                    <MobileMusicSwitch MobileaudioRef={MobileaudioRef} />
                </div>
            </div>
            {fullScreen && <TabletFullScreen tabletaudioRef={MobileaudioRef} />}
        </>
    )
}

export default MobilePlayer