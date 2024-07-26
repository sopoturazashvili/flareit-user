import { useState } from "react";
import styles from "./DeleteBox.module.scss";
import Modal from "../Modal/Modal";
import { useRecoilState } from "recoil";
import { openState } from "@/app/state";

const DeleteBox = () => {
  const [modal, setModal] = useRecoilState(openState);
  const onClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <img onClick={onClick} src="/images/Delete.svg" />
       <Modal
          active={modal}
          hasFooter={true}
          confirmText={"yes"}
          cancelText={"no"}
          onDone={() => {
            true;
          }}
        >
          <span className={styles.modalText}>
            Are you sure to delete song ?
          </span>
        </Modal>
    </>
  );
};

export default DeleteBox;
