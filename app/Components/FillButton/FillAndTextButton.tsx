import styles from "./FillAndTextButton.module.scss";

interface Props {
  text: string;
  fill: boolean;
  onClick: () => void;
}

const FillAndTextButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.fill ? styles.btnFill : styles.btnText}
    >
      {props.text}
    </button>
  );
};

export default FillAndTextButton;
