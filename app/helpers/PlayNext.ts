export const playNext = (currentIndex:number,audioRef:React.MutableRefObject<HTMLAudioElement | null>) => {
    if (audioRef.current) {
        const newIndex = currentIndex + 1
        const values = {
            newIndex : newIndex ,
            isPlaying : true ,
        }
        return values
    }
};