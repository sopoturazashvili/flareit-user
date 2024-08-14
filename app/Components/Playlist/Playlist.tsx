import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import MusicCard from '../MusicCard/MusicCard';
import styles from './Playlist.module.scss';
import { useRecoilState } from 'recoil';

interface Props {
    image: string;
}

const Playlist = (props: Props) => {
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const data = [
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 1,
            src: '/Player/stairway.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 2,
            src: '/Player/Bellin.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 3,
            src: '/Player/judas.mp3',
        },
        {
            image: '/images/MusicCard.svg',
            title: 'Yellow',
            temeName: 'Morgan Maxwell',
            id: 4,
            src: '/Player/Bellaire.mp3',
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
        const allSrc = data.map((item) => item.src);
        const imageSrc = data.map((item) => item.image);
        const artist = data.map((item) => item.temeName);
        const title = data.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };
    return (
        <div className={styles.PlaylistContainer}>
            <div className={styles.photoAndNameCont}>
                <div className={styles.photoAndName}>
                    <img src={props.image} />
                    <span className={styles.name}>My Everyday</span>
                </div>
            </div>
            <div className={styles.topFourHits}>
                {data.map((item, index) => (
                    <MusicCard
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        teamName={item.temeName}
                        isPlaying={isPlaying && globalMusicId === index}
                        deleteOrLike={true}
                        onClick={() => handleClick(item, index)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlist;
