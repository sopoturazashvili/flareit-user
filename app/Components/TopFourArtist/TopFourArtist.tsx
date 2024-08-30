import { useEffect, useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import axios from 'axios';

interface Artist {
    id: number;
    artistName: string;
    coverImgUrl: string;
    releaseDate: string;
    lastName: string;
}

const TopFourArtist = () => {
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/authors/top-authors')
            .then((res) => {
                setArtists(res.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <>
            {artists.map((item) => (
                <ArtistCard
                    key={item.id}
                    image={item.coverImgUrl}
                    artist={item.artistName}
                    year={item.releaseDate}
                    id={item.id}
                />
            ))}
        </>
    );
};

export default TopFourArtist;
