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
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/authors/top-authors', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setArtists(res.data.slice(0, 4));
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
