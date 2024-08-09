import { isPlayingState, musicGlobalState, musicId } from '@/app/state';
import MusicCard from '../MusicCard/MusicCard';
import styles from './Playlist.module.scss';
import { useRecoilState } from 'recoil';

interface Props {
    image: string;
}

const Playlist = (props: Props) => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
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
                        onClick={() => {
                            setIsPlaying(true);
                            setGlobalId(item.id);
                            setGlobalsrc(item.src);
                        }}
                        isPlaying={isPlaying && globalMusicId === index}
                        deleteOrLike={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlist;
