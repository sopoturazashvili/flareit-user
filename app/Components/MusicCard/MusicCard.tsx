import { useState, useRef, useEffect } from 'react';
import styles from './MusicCard.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import DeleteBox from '../DleleteBox/DeleteBox';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { BiDotsVerticalRounded } from 'react-icons/bi';

interface Props {
    image: string;
    title: string;
    teamName: string;
    deleteOrLike: boolean;
    id: number;
}

const MusicCard = (props: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPositionClasses, setMenuPositionClasses] = useState<string[]>(
        [],
    );
    const musicCardRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen && musicCardRef.current) {
            const rect = musicCardRef.current.getBoundingClientRect();

            console.log('this is rect left', rect.left);
            console.log('this is rect right', rect.right);

            if (rect.left > rect.right) {
                setMenuPositionClasses([...menuPositionClasses, 'styles.left']);
            } else {
                setMenuPositionClasses([
                    ...menuPositionClasses,
                    'styles.right',
                ]);
            }
        }
    }, [menuOpen]);

    return (
        <div className={styles.musicCard} ref={musicCardRef}>
            <div className={styles.musicCardHeader}>
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
                        <div
                            className={`${styles.dropDownMenu} ${menuPositionClasses.join(' ').trim()}`}
                        >
                            <DropDownMenu />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
