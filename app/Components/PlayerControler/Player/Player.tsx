import MobilePlayer from '../MobilePlayer/MobilePlayer';
import TabletPlayer from '../TabletPlayer/TabletPlayer/TabletPlayer';
import styles from './Player.module.scss';
import PlayerAndListComp from './PlayerAndListComp/PlayerAndListComp';
import useViewport from '@/app/helpers/UseViewport';

const Player = () => {
    const { isMobile, isDesktop, isTablet } = useViewport();
    return (
        <>
            <div className={styles.desktopPlayer}>
                {isDesktop && <PlayerAndListComp />}
            </div>
            <div className={styles.tabletPlayer}>
                {isTablet && <TabletPlayer />}
            </div>
            <div className={styles.mobilePlayer}>
                {isMobile && <MobilePlayer />}
            </div>
        </>
    );
};

export default Player;
