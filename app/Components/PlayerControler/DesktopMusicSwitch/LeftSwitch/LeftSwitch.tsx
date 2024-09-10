import { useRecoilState } from 'recoil';
import { indexState, musicGlobalState } from '@/app/state';
import styles from './LeftSwitch.module.scss';
import { shuffleState } from '@/app/Components/state';

const LeftSwitch = () => {
    const [index, setIndex] = useRecoilState(indexState);
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [isShuffle] = useRecoilState(shuffleState);

    const playPrevious = () => {
        if (isShuffle) {
            // Если шаффл включен, выбираем случайный трек
            const randomIndex = Math.floor(Math.random() * musicSrc.length);
            setIndex(randomIndex);
        } else {
            // Если шаффл выключен, выбираем предыдущий трек по порядку
            setIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : musicSrc.length - 1,
            );
        }
    };

    return (
        <img
            className={styles.LeftSwitch}
            src="/PlayerControler/LeftSwitch.svg"
            alt="Left Switch"
            onClick={playPrevious}
        />
    );
};

export default LeftSwitch;
