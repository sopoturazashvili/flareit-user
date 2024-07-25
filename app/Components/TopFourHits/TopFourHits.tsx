import exp from "constants";
import styles from "./TopFourHits.module.scss";
import MusicCard from "../MusicCard/MusicCard";

const TopFourHits = () => {
  const data = [
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
    },
  ];
  return (
    <>
      {data.map((item) => (
        <MusicCard
          image={item.image}
          title={item.title}
          teamName={item.temeName}
        />
      ))}
    </>
  );
};

export default TopFourHits;
