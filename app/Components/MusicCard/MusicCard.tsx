import styles from './MusicCard.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import DeleteBox from '../DleleteBox/DeleteBox';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';

interface Props {
    image: string;
    title: string;
    teamName: string;
    deleteOrLike: boolean;
    id: number;
    onClick: () => void;
    isPlaying: boolean;
    index: number;
}

const MusicCard = (props: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuStyles, setMenuStyles] = useState<React.CSSProperties>({
        position: 'absolute',
        top: '0',
        left: '20px',
        zIndex: '999',
        borderRadius: '8px',
        background: '#000',
        padding: '8px 16px',
        width: '254px',
    });
    const musicCardRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        console.log('Toggling menu. Current state:', menuOpen);
        setMenuOpen((prevState) => {
            console.log('Previous state:', prevState);
            return !prevState;
        });
    };

    useEffect(() => {
        console.log('useEffect running. Menu open:', menuOpen);
        if (menuOpen && musicCardRef.current) {
            const rect = musicCardRef.current.getBoundingClientRect();

            console.log('Rect:', rect);
            console.log('this is rect left', rect.left);
            console.log('this is rect right', rect.right);

            if (rect.left > 700) {
                setMenuStyles({
                    position: 'absolute',
                    top: '0',
                    left: '-250px',
                    zIndex: '999',
                    borderRadius: '8px',
                    background: '#000',
                    padding: '8px 16px',
                    width: '254px',
                });
            } else {
                setMenuStyles({
                    position: 'absolute',
                    top: '0',
                    left: '20px',
                    zIndex: '999',
                    borderRadius: '8px',
                    background: '#000',
                    padding: '8px 16px',
                    width: '254px',
                });
            }
        }
    }, [menuOpen]);

    return (
        <div ref={musicCardRef} className={styles.musicCard}>
            <div className={styles.musicCardHeader} onClick={props.onClick}>
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
                {props.deleteOrLike ? (
                    <DeleteBox id={props.id} />
                ) : (
                    <LikeButton isLiked={false} id={props.id} />
                )}
                <div onClick={toggleMenu} className={styles.menu}>
                    <BiDotsVerticalRounded size={24} color="white" />
                    {menuOpen && (
                        <div style={menuStyles}>
                            <DropDownMenu />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
