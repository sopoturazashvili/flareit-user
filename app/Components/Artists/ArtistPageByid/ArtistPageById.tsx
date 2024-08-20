'use client';
import { useParams } from 'next/navigation';
import AlbumCard from '../../AlbumCard/AlbumCard';
import MusicCard from '../../MusicCard/MusicCard';
import styles from './ArtistPageById.module.scss';
import { useRecoilState } from 'recoil';
import {
    authorNameState,
    globalImageState,
    indexState,
    isPlayingState,
    musicGlobalState,
    musicId,
    musicNameState,
} from '@/app/state';
import useToggleMenu from '@/app/useToggleMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface artistId {
    coverImgUrl: string;
    audioUrl: string;
    title: string;
    id: number;
}

const ArtistPageById = () => {
    const { currentCardId, toggleMenu } = useToggleMenu();
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setArtist] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);
    const [artistId,setArtistId] = useState<artistId[]>([])
    const id = useParams();
    console.log(id);
    useEffect(() => {
        axios
            .get('https://enigma-wtuc.onrender.com/musics')
            .then((result) => {
                setArtistId(result.data);
            })
            .catch((error) => {
                console.error('Error fetching music data:', error);
            });
    }, []);
    const albumsData = [
        {
            id: 1,
            artistName: 'Gunna',
            albumName: 'one of wun',
            year: '2019',
            image: '/images/guna.png',
        },
        {
            id: 2,
            artistName: 'Morgan Wallen',
            albumName: 'Dangerous',
            year: '2000',
            image: '/images/dangerous.png',
        },
        {
            id: 3,
            artistName: 'Twenty one pilot',
            albumName: 'Clancy',
            year: '2000',
            image: '/images/clancy.png',
        },
        {
            id: 4,
            artistName: 'Billie Eillish',
            albumName: 'Hit me hard...',
            year: '2005',
            image: '/images/billie.png',
        },
        {
            id: 5,
            artistName: 'Olivia Rodrigo',
            albumName: 'Guts',
            year: '2000',
            image: '/images/taylorSwift.png',
        },
        {
            id: 6,
            artistName: 'Taylor Swift',
            albumName: '1989',
            year: '1989',
            image: '/images/1989.png',
        },
        {
            id: 7,
            artistName: 'SZA',
            albumName: 'SOS',
            year: '2009',
            image: '/images/sza.png',
        },
        {
            id: 8,
            artistName: 'Taylor Swift',
            albumName: 'Lover',
            year: '2001',
            image: '/images/lover.png',
        },
    ];

    const handleClick = (
        item: {
            image?: string;
            title?: string;
            temeName?: string;
            id: number;
            src?: string;
        },
        index: number,
    ) => {
        const allSrc = artistId.map((item) => item.audioUrl);
        const imageSrc = artistId.map((item) => item.coverImgUrl);
        const artist = artistId.map((item) => item.title);
        const title = artistId.map((item) => item.title);
        setIsPlaying(true);
        setGlobalId(item.id);
        setImage(imageSrc);
        setGlobalsrc(allSrc);
        setActiveIdx(index);
        setArtist(artist);
        setTitle(title);
    };
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.pathName}>Coldplay</p>
            </div>
            <div className={styles.nameAndPhoto}>
                <img
                    className={styles.photo}
                    src="/images/artistById.svg"
                    alt="artistById"
                />
                <p className={styles.nameColor}>Coldplay</p>
                <p className={styles.biografiContainer}>
                    Coldplayare a Britishrockband formed inLondonin 1997,
                    consisting of vocalist and pianistChris Martin, lead
                    guitaristJonny Buckland, bassistGuy Berryman, drummer and
                    percussionistWill Champion, and managerPhil Harvey.[a]They
                    are best known fortheir live performances,[3]having
                    alsoimpacted popular culturewiththeir
                    artistry,advocacyandachievements. The members of the band
                    initially met atUniversity College London, calling
                    themselves Big Fat Noises and changing to Starfish, before
                    settling on the current name. After releasingSafety(1998)
                    independently, Coldplay signed withParlophonein 1999 and
                    wrote their debut album,Parachutes(2000). It featured
                    breakthrough single // eslint-disable-next-line,
                    react/no-unescaped-entities react/no-unescaped-entities
                    Yellow and received aBrit Award for British Album of the
                    Yearand aGrammy Award for Best Alternative Music Album. The
                    groups follow-up,A Rush of Blood to the Head(2002), won the
                    same accolades.
                </p>
            </div>
            <div className={styles.musicCard}>
                {artistId.map((itme, index) => (
                    <MusicCard
                        key={itme.id}
                        image={itme.coverImgUrl}
                        title={itme.title}
                        teamName={itme.title}
                        deleteOrLike={false}
                        id={itme.id}
                        isPlaying={isPlaying && globalMusicId === index}
                        onClick={() => handleClick(itme, index)}
                        index={index}
                        menuOpen={currentCardId === itme.id}
                        toggleMenu={() => toggleMenu(itme.id)}
                    />
                ))}
            </div>
            <div className={styles.albumContainer}>
                <p className={styles.albumsCont}>Albums</p>
                <div className={styles.albumMapContainer}>
                    {albumsData.map((item) => (
                        <AlbumCard
                            key={item.id}
                            image={item.image}
                            albumName={item.albumName}
                            year={item.year}
                            artistName={item.artistName}
                            id={item.id}
                            pagePathName={'albums'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistPageById;
