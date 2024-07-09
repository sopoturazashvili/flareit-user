import { useEffect } from 'react';
import Button from '../Button/Button'
import styles from './Modal.module.scss'
import Image from 'next/image'

interface Props {
    isOpen: boolean;
    bigMode: boolean;
    title?: string;
    onClose?: () => void;
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
            <div className={`${styles.modal} ${props.bigMode ? styles.modalBig : styles.modalSmall}`}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.sectionTitle}>{props.bigMode ? props.title : ''}</h4>
                    <div className={styles.closeButtonWrapper} onClick={props.onClose}>
                        <Image src={'/icons/closeButton.svg'} width={24} height={24} alt='Close Button' />
                    </div>
                </div>
                {props.bigMode ?
                    <div className={styles.modalMiddle}>
                        <div className={styles.addPhotoSection}>
                            <Image src={'/icons/addPhotoButton.svg'} width={48} height={48} alt='addPhotoButton' />
                            <h5 className={styles.addPhoto}>Add Photo</h5>
                        </div>
                        <div className={styles.inputSection}>
                            <h6 className={styles.inputHeading}>Add Playlist Title</h6>
                            <div className={styles.inputWrapper}>
                                <input type="text" className={styles.input} placeholder='add title' />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h4 className={styles.confirmationText}>Are you sure?</h4>
                    </div>}
                <div className={styles.buttonsContainer}>
                    <Button primary={false} text={'cancel'} width={'154px'} onClick={props.onClose}/>
                    <Button primary={true} text={'done'} width={'154px'} />
                </div>
            </div>
        </div>
    )
}

export default Modal