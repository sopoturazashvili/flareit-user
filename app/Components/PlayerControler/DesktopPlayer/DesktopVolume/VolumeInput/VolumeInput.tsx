import { useEffect } from "react";
import styles from "./VolumeInput.module.scss";
import { isPlayingState, mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";

interface Props {
  width: number;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const VolumeInput = (props: Props) => {
  const [volume, setVolume] = useRecoilState(volumeState);
  const [muted, setMuted] = useRecoilState(mutedState);

  useEffect(() => {
    if (props.audioRef.current) {
      props.audioRef.current.volume = volume / 100;
    }
  }, [volume, props.audioRef]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const progressPercent = volume;
  const trackStyle = {
    background: `linear-gradient(to right, #5E4BE2 ${progressPercent}%, #292929 ${progressPercent}%)`,
  };

  return (
    <div
      className={styles.inputContainer}
      style={{ width: `${props.width}px` }}
    >
      <input
        type="range"
        min={0}
        max={100}
        value={muted ? 0 : volume}
        onChange={handleVolumeChange}
        className={styles.volumeRange}
        style={trackStyle}
      />
    </div>
  );
};

export default VolumeInput;
