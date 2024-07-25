import ArtistCard from '../ArtistCard/ArtistCard';
import styles from './TopFourArtist.module.scss'

const TopFourArtist = () => {
    const data = [
        {
          image: "/images/artistCard.svg",
          artist: "coldplay",
          year: "1997",
          id: 0,
        },
        {
          image: "/images/artistCard.svg",
          artist: "coldplay",
          year: "1997",
          id: 1,
        },
        {
          image: "/images/artistCard.svg",
          artist: "coldplay",
          year: "1997",
          id: 2,
        },
        {
          image: "/images/artistCard.svg",
          artist: "coldplay",
          year: "1997",
          id: 3,
        },
      ];
    return (
        <>
        {data.map((item) => (
            <ArtistCard
              image={item.image}
              artist={item.artist}
              year={item.year}
              id={item.id}
            />
          ))}
        </>
    )
}
export default TopFourArtist