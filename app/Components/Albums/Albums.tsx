import AlbumCard from "../AlbumCard/AlbumCard"
import styles from './albums.module.scss'


const Albums = () => {

    const albums = [
        {
            id: 1,
            artistName: 'Gunna',
            albumName: 'one of wun',
            year: '2019',
            image: '/images/guna.png'
        },
        {
            id: 2,
            artistName: 'Morgan Wallen',
            albumName: 'Dangerous',
            year: '2000',
            image: '/images/dangerous.png'
        },
        {
            id: 3,
            artistName: 'Twenty one pilot',
            albumName: 'Clancy',
            year: '2000',
            image: '/images/clancy.png'
        },
        {
            id: 4,
            artistName: 'Billie Eillish',
            albumName: 'Hit me hard...',
            year: '2005',
            image: '/images/billie.png'
        },
        {
            id: 5,
            artistName: 'Olivia Rodrigo',
            albumName: 'Guts',
            year: '2000',
            image: '/images/taylorSwift.png'
        },
        {
            id: 6,
            artistName: 'Taylor Swift',
            albumName: '1989',
            year: '1989',
            image: '/images/1989.png'
        },
        {
            id: 7,
            artistName: 'SZA',
            albumName: 'SOS',
            year: '2009',
            image: '/images/sza.png'
        },
        {
            id: 8,
            artistName: 'Taylor Swift',
            albumName: 'Lover',
            year: '2001',
            image: '/images/lover.png'
        }
    ]

    return (
        <div className={styles.container}>
            <span className={styles.title}>Albums</span>
            <div className={styles.list}>
                {albums.map((album) => (
                    <AlbumCard key={album.id} image={album.image} albumName={album.albumName} year={album.year} artistName={album.artistName} id={album.id} pagePathName={'albums'} />
                ))}
            </div>
        </div>
    )
}

export default Albums;