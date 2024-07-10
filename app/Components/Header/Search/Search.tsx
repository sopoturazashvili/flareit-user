import React, { useState } from "react";
import styles from "./Search.module.scss";
import SearchMapCont from "./SearchList/SearchList";

const Search = () => {
    const data = [
        { id: 1, word: 'programming1', search_count: 10, last_searched: '2023-07-06', icon: '/Image/icon1.svg', type: 'music' },
        { id: 2, word: 'programming2', search_count: 10, last_searched: '2023-07-06', icon: '/Image/icon2.svg', type: 'music' },
        { id: 3, word: 'programming3', search_count: 10, last_searched: '2023-07-06', icon: '/Image/icon3.svg', type: 'album' },
        { id: 4, word: 'programming4', search_count: 10, last_searched: '2023-07-06', icon: '/Image/icon4.svg', type: 'album' },
        { id: 5, word: 'programming5', search_count: 10, last_searched: '2023-07-06', icon: '/Image/icon5.svg', type: 'artist' },
        { id: 6, word: 'programming6', search_count: 10, last_searched: '2023-07-06', icon: '/Image/icon6.svg', type: 'artist' },
    ];

    const [search, setSearch] = useState("");

    const onChange = (e:any) => {
        setSearch(e.target.value);
    }

    const renderItemsByType = (type:string) => {
        const filteredData = data.filter(item => item.type === type);
        return (
            <div>
                {filteredData.map((item) => (
                    <SearchMapCont key={item.id} item={item}/>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.searchAndMap}>
            <div className={styles.searchInputContainer}>
                <div className={styles.inputContainer}>
                    <img src={search ? "/Image/searchWhite.svg" : "/Image/searchGrey.svg"} alt="Search Icon" />
                    <input type="text" className={styles.input} onChange={onChange} value={search} placeholder="Search" />
                </div>
                {search && (
                    <div className={styles.searchMapCont}>
                        {renderItemsByType('music')}
                        {renderItemsByType('album')}
                        {renderItemsByType('artist')}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;