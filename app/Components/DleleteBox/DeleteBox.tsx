import { useState } from 'react';
import Modal from '../Modal/Modal';

interface Props {
    id: number;
}

interface Props {
    id: number;
    setRemove: () => void;
    remove: boolean;
    onConfirm: () => void;
}

const DeleteBox = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteCard = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <img onClick={deleteCard} src="/images/Delete.svg" alt="Delete" />
            <Modal
                isOpen={props.remove}
                title="Are you sure?"
                setIsModalOpen={() => props.setRemove()}
                hasFooter={true}
                cancelText="Cancel"
                confirmText="Delete"
                onDone={props.onConfirm}
            ></Modal>
        </>
    );
};

export default DeleteBox;
