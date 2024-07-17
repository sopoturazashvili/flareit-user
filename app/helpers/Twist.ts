export const Twistt = (direction: 'forward' | 'backward' ,TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null> , setCurrentTime:(time: number) => void) => {

    const increment = direction === "forward" ? 5 : -5;
    
    if (TabletaudioRef.current) {
      let twist = TabletaudioRef.current.currentTime + increment;
      twist = Math.max(0, Math.min(twist, TabletaudioRef.current.duration));
      TabletaudioRef.current.currentTime = twist;
      setCurrentTime(twist);
    }
  };