import { useState } from 'react';
import styles from './AddPlaylist.module.scss';
import Modal from '../../Modal/Modal';
import PlayListInput from '../PlayListInput/PlayListInput';
import apiInstance from '@/app/ApiInstance';
import { useRecoilState } from 'recoil';
import { clickState } from '@/app/state';

const AddPlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [click, setClick] = useRecoilState(clickState);

    const onAdd = (newValue: string) => {
        setTitle(newValue);
    };

    const onDone = async () => {
        if (title.trim()) {
            try {
                await apiInstance.post('/playlists', { title });
                setIsModalOpen(false);
                setClick(!click);
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
                            src="/allFolders/images/createdPlaylist.svg"
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
                <PlayListInput onChange={onAdd} value={title} />
            </Modal>
        </>
    );
};

export default AddPlaylist;
