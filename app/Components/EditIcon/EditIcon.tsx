import { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import EditPlaylist from '../EditPlaylist/EditPlaylist';
interface Props {
    id?: number;
    value?: string;
}

const EditIcon = (props: Props) => {
    const [click, setClick] = useState(false);
    const EditRef = useRef<{ submitForm: () => void }>(null);

    const handleModalDone = () => {
        if (EditRef.current) {
            EditRef.current.submitForm();
        }
        setClick(false);
    };

    return (
        <>
            <div
                onClick={() => {
                    setClick(!click);
                }}
            >
                <img src="/images/editPlaylist.svg" alt="editPlaylist" />
            </div>
            {click && (
                <Modal
                    isOpen={click}
                    setIsModalOpen={setClick}
                    hasFooter={true}
                    title="Edit Playlist"
                    onDone={handleModalDone}
                    cancelText="Cancel"
                    confirmText="Done"
                >
                    <EditPlaylist
                        ref={EditRef}
                        id={props.id}
                        value={props.value}
                    />
                </Modal>
            )}
        </>
    );
};

export default EditIcon;
