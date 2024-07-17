import { useState } from "react"
import styles from "./CreatedPlaylist.module.scss"
import Modal from "../../Modal/Modal"
import PlayListInput from "../PlayListInput/PlayListInput"

const CreatedPlaylist = () => {
    const [add, setAdd] = useState(false)
    const [value, setValue] = useState<String>("")

    const onAdd = (newValue: string) => {
        setValue(newValue);
    };

    const onDone = () => {
        if (value !== "") { 
            setAdd(false); 
            console.log("Playlist title:", value);
        }
    };

    return (
        <>
            <div className={styles.createdPlaylistContainer}>
                <div className={styles.createdPlaylist}>
                    <div className={styles.icon} onClick={() => { setAdd(!add) }}>
                        <img src="/Images/CreatedPlaylist.svg" />
                    </div>
                    <span className={styles.name}>Create Playlist</span>
                </div>
            </div>
            {add && <Modal isOpen={true} setIsOpen={setAdd} content={<PlayListInput onChange={onAdd} />} hasFooter={true} title={"Add Playlist"} onDone={onDone}  />}
        </>
    )
}

export default CreatedPlaylist


