import exp from "constants";
import styles from "./TopFourHits.module.scss";
import MusicCard from "../MusicCard/MusicCard";
import { Turret_Road } from "next/font/google";


const TopFourHits = () => {
  const data = [
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id:1
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id:2
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id:3
    },
    {
      image: "/images/MusicCard.svg",
      title: "Yellow",
      temeName: "Morgan Maxwell",
      id:4
    },
  ];
  return (
    <>
      {data.map((item) => (
        <MusicCard
          image={item.image}
          title={item.title}
          teamName={item.temeName}
          id={item.id}
          />
      ))}
    </>
  );
};

export default TopFourHits;
