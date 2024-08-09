import { useRecoilState } from 'recoil';
import styles from './TabletName.module.scss';
import { authorNameState, fullScreenState, musicNameState } from '@/app/state';

const TabletName = () => {
    const [fullScreen] = useRecoilState(fullScreenState);
    const [musicname] = useRecoilState(musicNameState);
    const [authorName] = useRecoilState(authorNameState);

    return (
        <div className={styles.tabletAndMusicBox}>
            <span
                className={
                    fullScreen ? styles.musicFullScreen : styles.musicName
                }
            >
                {authorName}
            </span>
            <span className={fullScreen ? styles.nameFullScreen : styles.name}>
                {musicname}
            </span>
        </div>
    );
};

export default TabletName;
