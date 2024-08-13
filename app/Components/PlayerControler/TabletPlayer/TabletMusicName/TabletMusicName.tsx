import { globalImageState } from '@/app/state';
import styles from './TabletMusicName.module.scss';
import TabletName from './TabletName/TabletName';
import { useRecoilState } from 'recoil';

const TabletMusicName = () => {
    const [image] = useRecoilState(globalImageState);
    return (
        <div className={styles.tabletMusicName}>
            <img
                className={styles.image}
                src={image ? image : '/PlayerControler/Default.svg'}
                alt="photo"
            />
            <TabletName />
        </div>
    );
};

export default TabletMusicName;
