import { useEffect, useRef, useState } from "react";
import styles from "./VolumeInput.module.scss"
import { isPlayingState, mutedState, volumeState } from "@/app/state";
import { useRecoilState } from "recoil";

interface Props {
  rotate: number,
  width: number,
  position?: string
  audioRef:any
}

const VolumeInput = (props:Props) => {
  const [volume, setVolume] = useRecoilState(volumeState);
  const [muted, setMuted] = useRecoilState(mutedState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (props.audioRef.current) {
      props.audioRef.current.volume = newVolume / 100;
    }
  };

  const inputVolume = {
    transform: `rotate(${props.rotate}deg)`,
    height: "var(--borderRadius, 4px)",
    width: `${props.width}px`,
    position: `${props.position}`,
  }

  
  return (
    <>
      <input style={inputVolume}
        type="range"
        min={0}
        max={100}
        value={muted ? 0 : volume}
        onChange={handleVolumeChange}
        onPlay={isPlaying ? props.audioRef?.current?.play() : props.audioRef?.current?.pause()} />
    </>
  )
}

export default VolumeInput