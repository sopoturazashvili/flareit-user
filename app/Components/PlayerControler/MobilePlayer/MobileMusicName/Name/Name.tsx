import { useRecoilState } from 'recoil';
import styles from './Name.module.scss';
import { authorNameState, musicNameState } from '@/app/state';

const Name = () => {
    const [musicName] = useRecoilState(musicNameState);
    const [authorName] = useRecoilState(authorNameState);
    return (
        <div className={styles.nameContainer}>
            <span className={styles.autor}>{authorName}</span>
            <span className={styles.name}>{musicName}</span>
        </div>
    );
};

export default Name;
