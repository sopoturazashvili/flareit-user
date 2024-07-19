import Link from "next/link";
import styles from "./SearchList.module.scss";
import Image from "next/image";

interface Props {
  item: any;
}

const SearchList = (props: Props) => {
  return (
    <Link
      key={props.item.id}
      className={styles.mapContainer}
      href={`${props.item.type}/${props.item.id}`}
    >
      <Image
        className={props.item === "music" ? styles.round : styles.square}
        src={props.item.icon}
        width={24}
        height={24}
        alt={"Icon"}
      />
      <span className={styles.searchAndMapText}>{props.item.word}</span>
    </Link>
  );
};

export default SearchList;
