import { useEffect, useState } from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import axios from 'axios';

interface Props {
    pagePathName: string;
}

interface Album {
    coverImgUrl: string;
    title: string;
    releaseDate: string;
    albumName: string;
    artistName: string;
    id: number;
}

const TopFourAlbums = (props: Props) => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/albums/top-albums')
            .then((res) => {
                setAlbums(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <>
            {albums.map((item) => (
                <AlbumCard
                    key={item.id}
                    image={item.coverImgUrl}
                    albumName={item.title}
                    year={item.releaseDate}
                    artistName={item.artistName}
                    id={item.id}
                    pagePathName={props.pagePathName}
                />
            ))}
        </>
    );
};

export default TopFourAlbums;
