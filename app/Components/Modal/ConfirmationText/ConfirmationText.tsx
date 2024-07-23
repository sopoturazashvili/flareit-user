import styles from "./ConfirmationText.module.scss";

interface Props {
  text: string;
}

const ConfirmationText = (props: Props) => {
  return (
    <div>
      <h4 className={styles.text}>{props.text}</h4>
    </div>
  );
};

export default ConfirmationText;
