import { useRef } from "react";
import DesktopInputRange from "../DesktopPlayer/DesktopInputRange/DesktopInputRange";
import DesktopMusicSwitch from "../DesktopPlayer/DesktopMusicSwitch/DesktopMusicSwitch";
import DesktopVolume from "../DesktopPlayer/DesktopVolume/DesktopVolume";
import FullScreenImage from "./FullScreenImage/FullScreenImage";
import styles from "./TabletFullScreen.module.scss";
import MusicList from "./FullScreenMusicList/MusicList";
import TabletName from "../TabletPlayer/TabletMusicName/TabletName/TabletName";
import Shuffle from "../Shuffle/Shufle";

interface Props {
  tabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const TabletFullScreen = (props: Props) => {
  return (
    <div className={styles.TabletFullScreen}>
      <div className={styles.tabletFullscreenPadd}>
        <div className={styles.imageAndName}>
          <FullScreenImage image={""} />
          <TabletName musicName={""} name={""} />
        </div>
        <div className={styles.inputRangeCont}>
          <Shuffle />
          <DesktopInputRange audioRef={props.tabletaudioRef} />
        </div>
        <div>
          <DesktopMusicSwitch audioRef={props.tabletaudioRef} />
          <DesktopVolume
            width={275}
            volumeWidth={32}
            volumeHeight={32}
            involved={""}
            audioRef={props.tabletaudioRef}
          />
        </div>
      </div>
      <div className={styles.musicListContainer}>
        <MusicList />
      </div>
    </div>
  );
};

export default TabletFullScreen;
