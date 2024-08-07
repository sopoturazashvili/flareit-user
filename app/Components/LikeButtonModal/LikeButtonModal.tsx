import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/app/Components/LikeButtonModal/LikeButtonModal.module.scss';
import PlaylistsItem from '../PlaylistsItem/PlaylistsItem';

interface Props {
    isOpen: boolean;
    anchorElement: HTMLElement | null;
}

const LikeButtonModal = ({ isOpen, anchorElement }: Props) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const playlists = [
        { id: 1, name: 'My Everyday', image: '/images/myeveryday.png' },
        { id: 2, name: 'Party Songs', image: '/images/partySongs.png' },
        { id: 3, name: 'Car Songs', image: '/images/carSongs.png' },
    ];

    useEffect(() => {
        if (isOpen && anchorElement) {
            const rect = anchorElement.getBoundingClientRect();
            setPosition({
                top: rect.top,
                left: rect.left + rect.width + 10,
            });
        }
    }, [isOpen, anchorElement]);

    const modalContent = (
        <div
            className={`${styles.general} ${isOpen ? styles.modalOverlay : styles.modalOverlayClosed}`}
            style={{ top: position.top, left: position.left }}
        >
            {playlists.map((playlist) => (
                <PlaylistsItem playlistName={playlist.name} key={playlist.id} />
            ))}
        </div>
    );

    return isOpen ? createPortal(modalContent, document.body) : null;
};

export default LikeButtonModal;
