import PlaylistItem from '@/app/Components/PlaylistItem/PlaylistItem';

const DropDownMenu = () => {
    const playlists = [
        { id: 1, name: 'Car Songs', image: '/images/myeveryday.png' },
        { id: 2, name: 'Party Songs', image: '/images/partySongs.png' },
        { id: 3, name: 'Birthday Songs', image: '/images/carSongs.png' },
    ];

    return (
        <div>
            {playlists.map((playlist) => (
                <PlaylistItem playlistName={playlist.name} key={playlist.id} />
            ))}
        </div>
    );
};

export default DropDownMenu;
