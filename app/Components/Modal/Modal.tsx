import { ReactNode, useEffect } from 'react';
import Button from '../Button/Button'
import styles from './Modal.module.scss'
import Image from 'next/image'

interface Props {
    isOpen: boolean;
    title?: string;
    onClose?: () => void;
    onDone?: () => void;
    content: ReactNode;
}

const Modal = (props: Props) => {

    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [props.isOpen]);

    if (!props.isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.sectionTitle}>{props.title}</h4>
                    <div className={styles.closeButtonWrapper} onClick={props.onClose}>
                        <Image src={'/icons/closeButton.svg'} width={24} height={24} alt='Close Button' />
                    </div>
                </div>
                {props.content}
                <div className={styles.buttonsContainer}>
                    <Button primary={false} text={'cancel'} width={'154px'} onClick={props.onClose}/>
                    <Button primary={true} text={'done'} width={'154px'} onClick={props.onDone}/>
                </div>
            </div>
        </div>
    )
}

export default Modal