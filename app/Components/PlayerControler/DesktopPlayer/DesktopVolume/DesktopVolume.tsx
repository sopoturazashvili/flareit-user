import { useRef, useState } from "react";
import styles from "./DesktopVolume.module.scss";
import { mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";
import VolumeInput from "./VolumeInput/VolumeInput";

interface Props {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  width: number;
  volumeWidth: number;
  volumeHeight: number;
  involved: string;
}

const DesktopVolume = (props: Props) => {
  const [muted, setMuted] = useRecoilState(mutedState);
  const [volume, seVolume] = useRecoilState(volumeState);

  const mutedFunc = () => {
    const audio = props.audioRef.current;
    if (audio) {
      setMuted(!muted);
      audio.volume = muted ? volume / 100 : 0;
    }
  };

  const volumeWidth = {
    width: `${props.volumeWidth}px`,
    height: `${props.volumeHeight}px`,
  };

  const involved = {
    display: `${props.involved}`,
  };

  return (
    <div className={styles.volumeContainer}>
      <div className={styles.volume}>
        {muted ? (
          <img
            src="/PlayerControler/Muted.svg"
            onClick={mutedFunc}
            style={volumeWidth}
            alt="Muted"
          />
        ) : (
          <img
            src="/PlayerControler/Volume.svg"
            style={volumeWidth}
            onClick={mutedFunc}
            alt="Volume"
          />
        )}
        <VolumeInput width={props.width} audioRef={props.audioRef} />
        <img src="/PlayerControler/Involved.svg" style={involved} />
      </div>
    </div>
  );
};

export default DesktopVolume;
