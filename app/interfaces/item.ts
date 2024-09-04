export interface Item {
    id: number;
    backgroundImage: string;
    title: string;
}

export interface RegisterInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ErrorResponse {
    message: string;
}

export interface AuthInputs {
    email: string;
    password: string;
}

export interface Response {
    access_token: string;
}

export interface Musicsrc {
    id: number;
    audioUrl: string;
}

export interface Album {
    coverImgUrl: string;
    title: string;
    releaseDate: string;
    albumName: string;
    artistName: string;
    id: number;
}

export interface ArtistCard {
    coverImgUrl: string;
    artistName: string;
    id: number;
}
export interface Playlist {
    title: string;
    id: number;
    musics: Musics[];
}

export interface Musics {
    length: number;
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    artistName: string;
    id: number;
    playCount: number;
}
