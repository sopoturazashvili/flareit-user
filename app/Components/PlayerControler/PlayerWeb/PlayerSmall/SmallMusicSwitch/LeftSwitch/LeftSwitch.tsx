import { useRecoilState } from "recoil";
import styles from "./LeftSwitch.module.scss"
import { currentIndexState, isPlayingState } from "@/app/state";
import { musicData } from "@/app/helpers/MusicData";
import { useRef } from "react";


const LeftSwitch = () => {
    const playPrevious = () => {
        const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
        const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = musicData.length - 1;
        }
        setCurrentIndex(newIndex);
        setIsPlaying(false);
    };


    return (
        <>
            <img src="/PlayerControler/LeftSwitch.svg" alt="Left Switch" onClick={() => playPrevious} />
        </>
    )
}

export default LeftSwitch