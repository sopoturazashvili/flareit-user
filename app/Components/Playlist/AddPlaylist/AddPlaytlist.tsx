import { useState } from 'react';
import styles from './AddPlaylist.module.scss';
import Modal from '../../Modal/Modal';
import PlayListInput from '../PlayListInput/PlayListInput';

const AddPlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState<string>('');

    const onAdd = (newValue: string) => {
        setValue(newValue);
    };

    const onDone = () => {
        if (value !== '') {
            setIsModalOpen(!isModalOpen);
            console.log(value, 'value');
        }
    };

    return (
        <>
            <div className={styles.createdPlaylistContainer}>
                <div className={styles.createdPlaylist}>
                    <div
                        className={styles.icon}
                        onClick={() => {
                            setIsModalOpen(!isModalOpen);
                        }}
                    >
                        <img
                            src="/images/createdPlaylist.svg"
                            alt="CreatedPlaylist"
                        />
                    </div>
                    <span className={styles.name}>Create Playlist</span>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                hasFooter={true}
                title={'Add Playlist'}
                onDone={onDone}
                cancelText={'Cancel'}
                confirmText={'Done'}
            >
                <PlayListInput onChange={onAdd} />
            </Modal>
        </>
    );
};

export default AddPlaylist;
