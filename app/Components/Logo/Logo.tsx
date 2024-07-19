import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img src="/Image/Logo.svg" />
    </Link>
  );
};

export default Logo;
