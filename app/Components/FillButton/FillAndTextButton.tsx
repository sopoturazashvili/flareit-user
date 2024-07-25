import styles from "./FillAndTextButton.module.scss";
import { useRouter } from "next/navigation";

interface Props {
  text: string;
  fill: boolean;
  href: string;
}

const FillAndTextButton = (props: Props) => {
  const router = useRouter()

  const handelClick = () => {
    router.push(props.href)
  }
  return (
      <button onClick={handelClick} className={props.fill ? styles.btnFill : styles.btnText}>
        {props.text}
      </button>
  );
};

export default FillAndTextButton;
