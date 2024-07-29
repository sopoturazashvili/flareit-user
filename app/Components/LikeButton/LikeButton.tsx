import { useState } from 'react';
import styles from './LikeButton.module.scss';

interface Props {
    isLiked: boolean;
    id: number;
}

const LikeButton = (props: Props) => {
    const [like, setLike] = useState(props.isLiked);

    const LikeFunc = () => {
        setLike(!like);
    };
    return (
        <div onClick={LikeFunc} className={styles.cursorPointer}>
            {like ? (
                <img src={'/images/LikeButton.svg'} alt="LikeButton" />
            ) : (
                <img src={'/images/WhithoutLike.svg'} alt="WhithoutLike" />
            )}
        </div>
    );
};
export default LikeButton;
