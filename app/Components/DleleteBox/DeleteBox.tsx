import { useState } from 'react';
import styles from './DeleteBox.module.scss';
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
    const onClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    const deleteCard = () => {
        console.log(props.id);
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
                children={undefined}
            ></Modal>
        </>
    );
};

export default DeleteBox;
