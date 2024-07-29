import AlbumCard from '../AlbumCard/AlbumCard';

interface Props {
    pagePathName: string;
}

const TopFourAlbums = (props: Props) => {
    const data = [
        {
            image: '/images/albumCover1.svg',
            albumName: 'Havana',
            year: '1998',
            artistName: 'Camila Cabello',
            pagePathName: props.pagePathName,
            id: 1,
        },
        {
            image: '/images/albumCover1.svg',
            albumName: 'Havana',
            year: '1998',
            artistName: 'Camila Cabello',
            pagePathName: props.pagePathName,
            id: 2,
        },
        {
            image: '/images/albumCover1.svg',
            albumName: 'Havana',
            year: '1998',
            artistName: 'Camila Cabello',
            pagePathName: props.pagePathName,
            id: 3,
        },
        {
            image: '/images/albumCover1.svg',
            albumName: 'Havana',
            year: '1998',
            artistName: 'Camila Cabello',
            pagePathName: props.pagePathName,
            id: 4,
        },
    ];
    return (
        <>
            {data.map((item) => (
                <AlbumCard
                    key={item.id}
                    image={item.image}
                    albumName={item.albumName}
                    year={item.year}
                    artistName={item.artistName}
                    id={item.id}
                    pagePathName={item.pagePathName}
                />
            ))}
        </>
    );
};

export default TopFourAlbums;
