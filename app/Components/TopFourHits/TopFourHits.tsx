import { useRecoilState } from 'recoil';
import MusicCard from '../MusicCard/MusicCard';
import {
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
} from '@/app/state';

const TopFourHits = () => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const data = [
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 53,
            src: '/Player/stairway.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 54,
            src: '/Player/Marron.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 55,
            src: '/Player/judas.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 56,
            src: '/Player/Bellaire.mp3',
        },
    ];
    const handleClick = (item, index: number) => {
        setIsPlaying(true);
        setGlobalId(item.id);

        const allSrc = data.map((item) => item.src);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
    };
    return (
        <>
            {data.map((item, index) => (
                <MusicCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    teamName={item.temeName}
                    id={item.id}
                    deleteOrLike={false}
                    isPlaying={isPlaying && globalMusicId === index}
                    onClick={() => handleClick(item, index)}
                    index={index}
                />
            ))}
        </>
    );
};

export default TopFourHits;
