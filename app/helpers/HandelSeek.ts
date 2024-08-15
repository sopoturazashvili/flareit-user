export const handleSeek = (
    e: React.ChangeEvent<HTMLInputElement>,
    setCurrentTime: (time: number) => void,
) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
};
