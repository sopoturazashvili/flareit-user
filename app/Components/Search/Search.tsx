'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import SearchItemAuthor from './SearchItemAuthor/SearchItemAuthor';
import SearchItemMusic from './SearchItemMusic/SearchItemMusic';
import SearchItemAlbum from './SearchItemAlbum/SearchItemAlbum';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ItemData {
    id: number;
    title?: string;
    coverImgUrl: string;
    artistName: string;
    lastName?: string;
    biography?: string;
    releaseDate?: string;
    audioUrl?: string;
    createdAt?: string;
    deletedAt?: string | null;
    playCount?: number;
    updatedAt?: string;
}

interface AuthorData extends ItemData {
    albums?: AlbumData[];
    musicsCount?: number;
    totalPlayCount?: number;
}

interface AlbumData extends ItemData {
    musics: MusicData[];
    totalPlayCount?: number;
}

interface MusicData extends ItemData {
    playCount?: number;
    audioUrl?: string;
}

interface Item {
    data: AuthorData | AlbumData | MusicData;
    type: 'author' | 'music' | 'album';
}

const Search = () => {
    const [searchResults, setSearchResults] = useState<Item[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setSearchTerm('');
            }
        };

        document.addEventListener('click', handleClickOutside);

        const handleSearch = async () => {
            if (searchTerm.trim() === '') {
                setSearchResults([]);
                return;
            }
            try {
                const response = await axios.get(
                    'https://enigma-wtuc.onrender.com/search',
                    {
                        params: { searchField: searchTerm },
                    },
                );

                console.log('this is response', response);

                const flattenedResults: Item[] = [];

                response.data.forEach(
                    (item: {
                        type: 'author' | 'album' | 'music';
                        data: AuthorData | AlbumData | MusicData;
                    }) => {
                        if (item.type === 'author') {
                            const authorData = item.data as AuthorData;
                            flattenedResults.push({
                                type: 'author',
                                data: authorData,
                            });

                            if (authorData.albums) {
                                authorData.albums.forEach(
                                    (album: AlbumData) => {
                                        flattenedResults.push({
                                            type: 'album',
                                            data: album,
                                        });

                                        album.musics.forEach(
                                            (music: MusicData) => {
                                                flattenedResults.push({
                                                    type: 'music',
                                                    data: music,
                                                });
                                            },
                                        );
                                    },
                                );
                            }
                        } else if (item.type === 'album') {
                            const albumData = item.data as AlbumData;
                            flattenedResults.push({
                                type: 'album',
                                data: albumData,
                            });

                            albumData.musics.forEach((music: MusicData) => {
                                flattenedResults.push({
                                    type: 'music',
                                    data: music,
                                });
                            });
                        } else if (item.type === 'music') {
                            const musicData = item.data as MusicData;
                            flattenedResults.push({
                                type: 'music',
                                data: musicData,
                            });
                        }
                    },
                );
                setSearchResults(flattenedResults);
            } catch (error) {
                console.error('Error during search', error);
            }
        };
        handleSearch();
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [searchTerm, pathname]);

    const handleItemClick = () => {
        setSearchTerm('');
    };

    const renderItemsByType = () => {
        return (
            <div className={styles.dataContainer}>
                {searchResults.map((item) => {
                    const { data, type } = item;
                    switch (type) {
                        case 'author':
                            return (
                                <SearchItemAuthor
                                    key={data.id}
                                    id={data.id}
                                    artistName={data.artistName}
                                    coverImgUrl={data.coverImgUrl}
                                    onClick={handleItemClick}
                                />
                            );
                        case 'music':
                            return (
                                <SearchItemMusic
                                    id={data.id}
                                    key={data.id}
                                    title={data.title}
                                    artistName={data.artistName}
                                    coverImgUrl={data.coverImgUrl}
                                    audioUrl={data.audioUrl}
                                    onClick={handleItemClick}
                                />
                            );
                        case 'album':
                            return (
                                <SearchItemAlbum
                                    id={data.id}
                                    key={data.id}
                                    title={data.title}
                                    artistName={data.artistName}
                                    coverImgUrl={data.coverImgUrl}
                                    onClick={handleItemClick}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        );
    };

    return (
        <div className={styles.searchAndMap} ref={searchRef}>
            <div className={styles.searchInputContainer}>
                <div className={styles.inputContainer}>
                    <Image
                        src={
                            searchTerm
                                ? '/Image/searchWhite.svg'
                                : '/Image/searchGrey.svg'
                        }
                        alt="Search Icon"
                        width={24}
                        height={24}
                    />
                    <input
                        type="text"
                        className={styles.input}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        placeholder="Search"
                    />
                </div>
                {searchTerm && (
                    <div className={styles.searchMapCont}>
                        {renderItemsByType()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
