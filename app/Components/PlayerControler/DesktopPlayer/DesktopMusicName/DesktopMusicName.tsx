import React, { useState } from "react";
import styles from "./DesktopMusicName.module.scss";

interface Props {
    image: string;
    title: string;
    fullScreen?: boolean;
    setFullScreen?: (e:boolean) => void
} 



const DesktopMusicName = (props:Props) => {
    const { image, title, fullScreen, setFullScreen } = props;

    return (
        <div className={styles.imageAndTitle} onClick={() => {setFullScreen?.(!fullScreen)}}>
            <img className={fullScreen ? styles.fullScreenImage : styles.image} src={props.image} alt="Music Cover" />
            <span className={fullScreen ? styles.fullScreentitle : styles.title}>{props.title}</span>
        </div>
    );
};

export default DesktopMusicName;

