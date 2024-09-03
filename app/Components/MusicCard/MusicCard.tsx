import styles from './MusicCard.module.scss';
import DeleteBox from '../DleleteBox/DeleteBox';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

interface Props {
    image: string;
    title: string;
    teamName: string;
    deleteOrLike: boolean;
    id: number;
    onClick: () => void;
    isPlaying: boolean;
    index: number;
    menuOpen: boolean;
    toggleMenu: () => void;
}

const MusicCard = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [, setIsDeleted] = useState(false);
    const token = localStorage.getItem('token');
    const [menuStyles, setMenuStyles] = useState<React.CSSProperties>({
        position: 'absolute',
        top: '0',
        left: '20px',
    });
    const musicCardRef = useRef<HTMLDivElement>(null);
    const params = useParams();

    useEffect(() => {
        if (props.menuOpen && musicCardRef.current) {
            const rect = musicCardRef.current.getBoundingClientRect();

            if (rect.left >= window.innerWidth - rect.right) {
                setMenuStyles({
                    position: 'absolute',
                    top: '0',
                    left: '-250px',
                });
            }
        }
    }, [props.menuOpen]);
    const data = {
        musicId: props.id,
        playlistId: Number(params.id),
    };

    const handleSongClick = async () => {
        props.onClick();
        try {
            const response = await axios.post(
                'https://enigma-wtuc.onrender.com/listen-records',
                { musicId: props.id },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            console.log('Response:', response);
        } catch (error) {
            console.error('Error sending music ID:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(
                'https://enigma-wtuc.onrender.com/playlists/musicId',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    data,
                },
            );
            setIsDeleted(true);
        } catch (error) {
            alert(error);
        } finally {
            setShowModal(false);
        }
    };

    // if (isDeleted) return null;

    return (
        <div ref={musicCardRef} className={styles.musicCard}>
            <div className={styles.musicCardHeader} onClick={handleSongClick}>
                <div className={styles.musicCardhover}>
                    <img
                        className={styles.musicCardPhoto}
                        src={props.image}
                        alt="photo"
                    />
                    <div className={styles.musicCardHoverPhoto}>
                        <img src="/images/PlayHover.svg" alt="PlayHover" />
                    </div>
                </div>
                <div className={styles.musicCardTitle}>
                    <span className={styles.musicCardName}>{props.title}</span>
                    <span className={styles.musicCardTeam}>
                        {props.teamName}
                    </span>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                {props.deleteOrLike && (
                    <div onClick={() => setShowModal(!showModal)}>
                        <DeleteBox
                            id={props.id}
                            setRemove={() => setShowModal(showModal)}
                            remove={showModal}
                            onConfirm={handleDelete}
                        />
                    </div>
                )}
                <div onClick={props.toggleMenu} className={styles.dots}>
                    <BiDotsVerticalRounded size={24} color="white" />
                    {props.menuOpen && (
                        <div style={menuStyles} className={styles.menu}>
                            <DropDownMenu />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
