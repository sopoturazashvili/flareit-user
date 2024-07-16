import { ReactNode } from 'react';
import Button from '../Button/Button'
import styles from './Modal.module.scss'
import Image from 'next/image'

interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void
    title?: string;
    onDone?: () => void;
    content: ReactNode;
    hasFooter: boolean;
}

const Modal = (props: Props) => {

    const onClose = () => {
        props.setIsOpen(!props.isOpen)
    }

    return (
        <div className={props.isOpen ? styles.modalOverlay : styles.modalOverlayClosed}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.sectionTitle}>{props.title}</h4>
                    <div className={styles.closeButtonWrapper} onClick={onClose}>
                        <Image src={'/icons/closeButton.svg'} width={24} height={24} alt='Close Button' />
                    </div>
                </div>
                <div className={styles.content}>
                    {props.content}
                </div>
                {props.hasFooter && <div className={styles.buttonsContainer}>
                    <Button primary={false} text={'cancel'} width={'154px'} onClick={onClose} />
                    {props.onDone && (
                        <Button primary={true} text={'done'} width={'154px'} onClick={props.onDone} />
                    )}
                </div>}
            </div>
        </div>
    )
}

export default Modal