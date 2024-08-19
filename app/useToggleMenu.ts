import { useRecoilState } from 'recoil';
import { currentCardIdState } from './state';

const useToggleMenu = () => {
    const [currentCardId, setCurrentCardId] =
        useRecoilState(currentCardIdState);

    const toggleMenu = (id: number) => {
        if (currentCardId === id) {
            setCurrentCardId(null);
        } else {
            setCurrentCardId(id);
        }
    };

    return { currentCardId, toggleMenu };
};

export default useToggleMenu;
