import Link from "next/link";
import styles from "./FillAndTextButton.module.scss";

interface Props {
  text: string;
  fill: boolean;
  href: string;
}

const FillAndTextButton = (props: Props) => {
  return (
    <Link href={`/${props.href}`}>
      <button className={props.fill ? styles.btnFill : styles.btnText}>
        {props.text}
      </button>
    </Link>
  );
};

export default FillAndTextButton;
