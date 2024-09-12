import { useState } from 'react';
import styles from './AddPlaylist.module.scss';
import Modal from '../../Modal/Modal';
import PlayListInput from '../PlayListInput/PlayListInput';
import apiInstance from '@/app/ApiInstance';

const AddPlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState<string>('');

    const onAdd = (newValue: string) => {
        setTitle(newValue);
    };


    const onDone = async () => {
            if (title) {
                try {
                    apiInstance.post('/playlists', { title });
                    setIsModalOpen(false);
                    setTitle('');
                } catch (err) {
                    alert('An error occurred while adding the playlist.');
                }
            }
        };

    return (
        <>
            <div
                className={styles.createdPlaylistContainer}
                onClick={() => setIsModalOpen(true)}
            >
                <div className={styles.createdPlaylist}>
                    <div className={styles.icon}>
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
                title="Add Playlist"
                onDone={onDone}
                cancelText="Cancel"
                confirmText="Done"
            >
                <PlayListInput onChange={onAdd} />
            </Modal>
        </>
    );
};

export default AddPlaylist;
