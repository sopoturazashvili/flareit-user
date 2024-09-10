import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import styles from './MusicCard.module.scss';
import DeleteBox from '../DleleteBox/DeleteBox';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { useRecoilState } from 'recoil';
import { indexState, isPlayingState } from '../state';

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
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    const [menuStyles, setMenuStyles] = useState<React.CSSProperties>({
        position: 'absolute',
        top: '0',
        left: '20px',
    });
    const musicCardRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const params = useParams();
    const [isPlaying] = useRecoilState(isPlayingState);
    const [index] = useRecoilState(indexState);
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                musicCardRef.current &&
                !musicCardRef.current.contains(event.target as Node)
            ) {
                props.toggleMenu();
            }
        };

        if (props.menuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [props.menuOpen, props.toggleMenu]);

    const data = {
        musicId: props.id,
        playlistId: Number(params.id),
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

    const handleEditClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        if (props.toggleMenu) {
            props.toggleMenu();
        }
    };
    return (
        <div
            className={styles.listItem}
            ref={musicCardRef}
            onClick={props.onClick}
        >
            <div className={styles.photo}>
                <div
                    style={{ backgroundImage: `url(${props.image})` }}
                    className={styles.itemImageWrapper}
                >
                    <div className={styles.itemHoverPhoto}>
                        {isPlaying && props.index === index ? (
                            <img
                                className={styles.image}
                                src="/PlayerControler/Play.svg"
                                alt="Pause Button"
                            />
                        ) : (
                            <img
                                className={styles.image}
                                src="/PlayerControler/Pause.svg"
                                alt="Play Button"
                            />
                        )}
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
                <div onClick={handleEditClick} className={styles.dots}>
                    <BiDotsVerticalRounded size={24} color="white" />
                    {props.menuOpen && (
                        <div
                            ref={menuRef}
                            style={menuStyles}
                            className={styles.menu}
                        >
                            <DropDownMenu id={props.id} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
