import styles from './ModalContent.module.scss'
import Image from 'next/image'

const ModalContent = () => {
    return (
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
    )
}

export default ModalContent;