'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import SearchItemAuthor from './SearchItemAuthor/SearchItemAuthor';
import SearchItemMusic from './SearchItemMusic/SearchItemMusic';
import SearchItemAlbum from './SearchItemAlbum/SearchItemAlbum';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Item } from '../../interfaces/searchInterfaces';
import { useDebounce } from '../../helpers/useDebounce';
import { processAndSortSearchResults } from '@/app/helpers/processSearchResults';
import { SearchTypeEnum } from '@/app/enums/searchType.enum';
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
import { Musics } from '@/app/interfaces/item';
import { searchTermState } from '@/app/state';
import apiInstance from '@/app/ApiInstance';

const Search = () => {
    const [searchResults, setSearchResults] = useState<Item[]>([]);
    const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
    const searchRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const debouncedSearchTerm = useDebounce(searchTerm, 200);
    const [, setGlobalsrc] = useRecoilState(musicGlobalState);
    const [globalMusicId, setGlobalId] = useRecoilState(musicId);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [, setActiveIdx] = useRecoilState(indexState);
    const [, setImage] = useRecoilState(globalImageState);
    const [, setAuthorName] = useRecoilState(musicNameState);
    const [, setTitle] = useRecoilState(authorNameState);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setSearchTerm('');
                setSearchResults([]);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleSearch = async () => {
            if (!debouncedSearchTerm.trim()) {
                setSearchResults([]);
                return;
            }

            try {
                const { data } = await apiInstance.get('/search', {
                    params: { searchField: debouncedSearchTerm },
                });

                const sortedResults = processAndSortSearchResults(data);
                setSearchResults(sortedResults);
            } catch (error) {
                console.error('Error during search', error);
            }
        };

        handleSearch();
    }, [debouncedSearchTerm, pathname]);

    const handleClickSecond = (item: Musics, index: number) => {
        if (globalMusicId === item.id) {
            setIsPlaying(!isPlaying);
        } else {
            const allSrc = searchResults
                .filter((result) => result.type === SearchTypeEnum.Music)
                .map((result) => ({
                    audioUrl: result.data.audioUrl ?? '',
                    id: result.data.id,
                }));

            const imageSrc = searchResults
                .filter((result) => result.type === SearchTypeEnum.Music)
                .map((result) => result.data.coverImgUrl ?? '');

            const musicName = searchResults
                .filter((result) => result.type === SearchTypeEnum.Music)
                .map((result) => result.data.artistName ?? '');

            const title = searchResults
                .filter((result) => result.type === SearchTypeEnum.Music)
                .map((result) => result.data.title ?? '');

            setIsPlaying(true);
            setGlobalId(item.id);
            setImage(imageSrc);
            setGlobalsrc(allSrc);
            setActiveIdx(index);
            setAuthorName(musicName);
            setTitle(title);
        }
    };

    const handleClick = () => {
        setSearchTerm('');
    };

    const renderItemsByType = () => (
        <div className={styles.dataContainer}>
            {searchResults.map(({ data, type }, index) => {
                const commonProps = {
                    id: data.id,
                    artistName: data.artistName,
                    coverImgUrl: data.coverImgUrl,
                    title: data.title,
                    index,
                };

                switch (type) {
                    case SearchTypeEnum.Author:
                        return (
                            <SearchItemAuthor
                                onClick={handleClick}
                                key={data.id}
                                {...commonProps}
                            />
                        );
                    case SearchTypeEnum.Music:
                        return (
                            <SearchItemMusic
                                key={data.id}
                                onClick={() =>
                                    handleClickSecond(data as Musics, index)
                                }
                                id={data.id}
                                artistName={data.artistName}
                                coverImgUrl={data.coverImgUrl}
                                title={data.title}
                                audioUrl={data.audioUrl}
                            />
                        );
                    case SearchTypeEnum.Album:
                        return (
                            <SearchItemAlbum
                                onClick={handleClick}
                                key={data.id}
                                {...commonProps}
                                title={data.title}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );

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
