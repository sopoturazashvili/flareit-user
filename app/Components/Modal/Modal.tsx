import { ReactNode, useState } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.scss";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { openState } from "@/app/state";

interface Props {
  active:boolean;
  title?: string;
  onDone?: () => void;
  children: ReactNode;
  hasFooter: boolean;
  cancelText: string,
  confirmText: string
}

const Modal = (props: Props) => {
  const [open, setIsOpen]=useRecoilState<boolean>(openState)
  
  const onClose = () => {
    setIsOpen(!open);
  };

  return (
    <div
      className={open ? styles.modalOverlay : styles.modalOverlayClosed}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h4 className={styles.sectionTitle}>{props.title}</h4>
          <div className={styles.closeButtonWrapper} onClick={onClose}>
            <Image
              src={"/icons/closeButton.svg"}
              width={24}
              height={24}
              alt="Close Button"
            />
          </div>
        </div>
        <div className={styles.content}>{props.children}</div>
        {props.hasFooter && (
          <div className={styles.buttonsContainer}>
            <Button
              primary={false}
              text={props.cancelText}
              width={"154px"}
              onClick={onClose}
            />
            {props.onDone && (
              <Button
                primary={true}
                text={props.confirmText}
                width={"154px"}
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
