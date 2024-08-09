import { globalImageState } from '@/app/state';
import styles from './TabletMusicName.module.scss';
import TabletName from './TabletName/TabletName';
import { useRecoilState } from 'recoil';

const TabletMusicName = () => {
    const [image] = useRecoilState(globalImageState);
    return (
        <div className={styles.tabletMusicName}>
            <img src={image} alt="photo" />
            <TabletName />
        </div>
    );
};

export default TabletMusicName;
