import { useRecoilState } from 'recoil';
import styles from './Shuffle.module.scss';
import { shuffleState } from '@/app/state';

const Shuffle = () => {
    const [isShuffle, setIsShuffle] = useRecoilState(shuffleState);

    const handleShuffleClick = () => {
        setIsShuffle(!isShuffle);
    };

    return (
        <div onClick={handleShuffleClick}>
            {isShuffle ? (
                <img
                    className={styles.shuffle}
                    src="/allFolders/PlayerControler/pinkShuffle.svg"
                    alt="shuffle"
                />
            ) : (
                <img
                    className={styles.shuffle}
                    src="/allFolders/PlayerControler/shuffle.svg"
                    alt="Messy"
                />
            )}
        </div>
    );
};

export default Shuffle;
