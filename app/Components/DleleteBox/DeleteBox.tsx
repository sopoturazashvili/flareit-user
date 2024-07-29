import { useState } from 'react';
import styles from './DeleteBox.module.scss';
import Modal from '../Modal/Modal';

interface Props {
    id: number;
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
            <img onClick={onClick} src="/images/Delete.svg" alt="Delete" />
            <Modal
                hasFooter={true}
                confirmText={'yes'}
                cancelText={'no'}
                onDone={deleteCard}
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <span className={styles.modalText}>
                    Are you sure to delete song ?
                </span>
            </Modal>
        </>
    );
};

export default DeleteBox;
