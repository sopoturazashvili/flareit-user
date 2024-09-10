import { useRecoilState } from 'recoil';
import styles from './Shuffle.module.scss';
import { shuffleState } from '../../state';

const Shuffle = () => {
    const [isShuffle, setIsShuffle] = useRecoilState(shuffleState);

    const handleShuffleClick = () => {
        setIsShuffle(!isShuffle);
    };

    return (
        <div onClick={handleShuffleClick}>
            {isShuffle ? (
                <img className={styles.shuffle} src="/PlayerControler/pinkShuffle.svg" alt="shuffle" />
            ) : (
                <img
                    className={styles.shuffle}
                    src="/PlayerControler/shuffle.svg"
                    alt="Messy"
                />
            )}
        </div>
    );
};

export default Shuffle;
