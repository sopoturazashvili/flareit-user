import styles from "./LogOut.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  title: string;
}

const LogOut = (props: Props) => {
  const [profile, setProfile] = useState(false);

  const onClick = () => {
    setProfile(!profile);
  };
  return (
    <Link className={styles.profile} onClick={onClick} href={"/mobileLogOut"}>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={"profile"}
      />
      {props.title && <span className={styles.title}>{props.title}</span>}
    </Link>
  );
};

export default LogOut;
