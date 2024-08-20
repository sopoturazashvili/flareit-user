import { useRecoilState } from 'recoil';
import MusicCard from '../MusicCard/MusicCard';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import useToggleMenu from '@/app/useToggleMenu';

const TopFourHits = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const data = [
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 53,
            src: '/Player/Disclosure.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 54,
            src: '/Player/FastCar.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 55,
            src: '/Player/Regard.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 56,
            src: '/Player/Mwaki.mp3',
        },
    ];
    const handleClick = (
        item: {
            image?: string;
            title?: string;
            temeName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        const imageSrc = data.map((item) => item.image);
        const allSrc = data.map((item) => item.src);
        const musicName = data.map((item) => item.temeName);
        const title = data.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setImage(imageSrc);
        setMusicName(musicName);
        setAuthorName(title);
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
                    menuOpen={currentCardId === item.id}
                    toggleMenu={() => toggleMenu(item.id)}
                />
            ))}
        </>
    );
};

export default TopFourHits;
