import { useEffect, useRef, useState } from "react";
import styles from "./VolumeInput.module.scss"
import { isPlayingState, mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";


const VolumeInput = () => {
  const [volume, setVolume] = useRecoilState(volumeState);
  const [muted, setMuted] = useRecoilState(mutedState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <>
      <input className={styles.inputVolume}
        type="range"
        min={0}
        max={100}
        value={muted ? 0 : volume}
        onChange={handleVolumeChange}
        onPlay={isPlaying ? audioRef.current?.play() : audioRef.current?.pause()} />
    </>
  )
}

export default VolumeInput