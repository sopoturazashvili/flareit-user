import { useRecoilState } from 'recoil';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import useToggleMenu from '@/app/helpers/useToggleMenu';
import { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import apiInstance from '@/app/ApiInstance';

interface Music {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
    artistName: string;
}

const TopFourHits = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setMusicName] = useRecoilState(musicNameState);
    const [, setAuthorName] = useRecoilState(authorNameState);
    const [music, setMusic] = useState<Music[]>([]);

    useEffect(() => {
        apiInstance
            .get('/musics/tophits')
            .then((result) => {
                setMusic(result.data.slice(0, 4));
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    const handleClick = (
        item: {
            image?: string;
            title?: string;
            artistName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const imageSrc = music.map((item) => item.coverImgUrl);
            const allSrc = music.map((item) => ({
                audioUrl: item.audioUrl,
                id: item.id,
            }));

            const artistName = music.map((item) => item.artistName);
            const title = music.map((item) => item.title);

            setIsPlaying(true);
            setGlobalId(item.id);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setImage(imageSrc);
            setMusicName(artistName);
            setAuthorName(title);
        }
    };

    return (
        <>
            {music.map((item, index) => (
                <MusicCard
                    key={item.id}
                    image={item.coverImgUrl}
                    title={item.title}
                    teamName={item.artistName}
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
