import OneAlbumById from "@/app/Components/Albums/OneAlbumById/OneAlbumById";
import styles from "./page.module.scss";

const OneAlbum = () => {
  return (
    <div className={styles.OneAlbum}>
      <div>
        <span className={styles.pathName}>OneAlbum</span>
      </div>
      <OneAlbumById />
    </div>
  );
};

export default OneAlbum;
