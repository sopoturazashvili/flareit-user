import { ReactNode } from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.scss';
import ModlaImage from './ModalImage/ModalImage';

interface Props {
    isOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    title?: string;
    onDone?: () => void;
    children?: ReactNode;
    hasFooter: boolean;
    cancelText: string;
    confirmText: string;
}

const Modal = (props: Props) => {
    const onClose = () => {
        props.setIsModalOpen(!props.isOpen);
    };
    return (
        <div
            className={
                props.isOpen ? styles.modalOverlay : styles.modalOverlayClosed
            }
        >
            <div className={styles.modal}>
                <ModlaImage
                    title={props.title}
                    setIsModalOpen={props.setIsModalOpen}
                    isOpen={props.isOpen}
                />
                <div className={styles.content}>{props.children}</div>
                {props.hasFooter && (
                    <div className={styles.buttonsContainer}>
                        <Button
                            primary={false}
                            text={props.cancelText}
                            onClick={onClose}
                        />
                        {props.onDone && (
                            <Button
                                primary={true}
                                text={props.confirmText}
                                onClick={props.onDone}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
