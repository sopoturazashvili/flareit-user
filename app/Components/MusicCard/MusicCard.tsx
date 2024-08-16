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
                setMenuPositionClasses((prevClasses) => [
                    ...prevClasses,
                    'styles.left',
                ]);
            } else {
                setMenuPositionClasses((prevClasses) => [
                    ...prevClasses,
                    'styles.right',
                ]);
            }
        }
    }, [menuOpen]);

    return (
        <div className={styles.musicCard}>
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
