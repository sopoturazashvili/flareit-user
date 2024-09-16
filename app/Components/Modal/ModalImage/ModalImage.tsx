import styles from './ModlaImage.module.scss';
import Image from 'next/image';

interface Props {
    title: string | undefined;
    setIsModalOpen: (value: boolean) => void;
    isOpen: boolean;
}

const ModlaImage = (props: Props) => {
    const onClose = () => {
        props.setIsModalOpen(!props.isOpen);
    };
    return (
        <div className={styles.modalHeader}>
            <h4 className={styles.sectionTitle}>{props.title}</h4>
            <div className={styles.closeButtonWrapper} onClick={onClose}>
                <Image
                    src={'/allFolders/icons/closeButton.svg'}
                    width={24}
                    height={24}
                    alt="Close Button"
                />
            </div>
        </div>
    );
};

export default ModlaImage;
