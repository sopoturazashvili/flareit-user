import { useRecoilState } from "recoil";
import styles from "./TabeltVolume.module.scss";
import TabletVolumeInput from "./TabletVolumeInput/TabletVolumeInput";
import { mutedState, volumeState } from "@/app/state";

interface Props {
  TabletaudioRef: React.MutableRefObject<HTMLAudioElement | null>;
  tabletWidth: number;
  tabletInvolved: string;
  tabletVolumeWidth: number;
  tabletVolumeHeight: number;
}

const TabeltVolume = (props: Props) => {
  const [muted, setMuted] = useRecoilState(mutedState);
  const [volume, setVolume] = useRecoilState(volumeState);

  const mutedFunc = () => {
    const audio = props.TabletaudioRef.current;
    if (audio) {
      setMuted(!muted);
      audio.volume = muted ? volume / 100 : 0;
    }
  };
  const tabletInvolved = {
    display: `${props.tabletInvolved}`,
  };

  const tabletVolumeWidth = {
    width: `${props.tabletVolumeWidth}px`,
    height: `${props.tabletVolumeHeight}px`,
  };
  return (
    <div className={styles.volumeContainer}>
      <div className={styles.volume}>
        {muted ? (
          <img
            src="/PlayerControler/Muted.svg"
            onClick={mutedFunc}
            style={tabletVolumeWidth}
            alt="Muted"
          />
        ) : (
          <img
            src="/PlayerControler/Volume.svg"
            style={tabletVolumeWidth}
            onClick={mutedFunc}
            alt="Volume"
          />
        )}
        <TabletVolumeInput
          tabletWidth={props.tabletWidth}
          TabletaudioRef={props.TabletaudioRef}
        />
        <img src="/PlayerControler/Involved.svg" style={tabletInvolved} />
      </div>
    </div>
  );
};

export default TabeltVolume;
