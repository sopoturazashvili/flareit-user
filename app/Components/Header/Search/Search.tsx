import React, { useState } from "react";
import styles from "./Search.module.scss";
import SearchList from "./SearchList/SearchList";

const Search = () => {
  const data = [
    {
      id: 1,
      word: "programming1",
      search_count: 10,
      last_searched: "2023-07-06",
      icon: "/Image/mapicon.svg",
      type: "music",
    },
    {
      id: 2,
      word: "programming2",
      search_count: 10,
      last_searched: "2023-07-06",
      icon: "/Image/mapicon.svg",
      type: "music",
    },
    {
      id: 3,
      word: "programming3",
      search_count: 10,
      last_searched: "2023-07-06",
      icon: "/Image/square.svg",
      type: "album",
    },
    {
      id: 4,
      word: "programming4",
      search_count: 10,
      last_searched: "2023-07-06",
      icon: "/Image/square.svg",
      type: "album",
    },
    {
      id: 5,
      word: "programming5",
      search_count: 10,
      last_searched: "2023-07-06",
      icon: "/Image/square.svg",
      type: "artist",
    },
    {
      id: 6,
      word: "programming6",
      search_count: 10,
      last_searched: "2023-07-06",
      icon: "/Image/square.svg",
      type: "artist",
    },
  ];

  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const renderItemsByType = (type: string) => {
    const filteredData = data.filter((item) => item.type === type);
    return (
      <div className={styles.dataContainer}>
        {filteredData.map((item) => (
          <SearchList key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.searchAndMap}>
      <div className={styles.searchInputContainer}>
        <div className={styles.inputContainer}>
          <img
            src={search ? "/Image/searchWhite.svg" : "/Image/searchGrey.svg"}
            alt="Search Icon"
          />
          <input
            type="text"
            className={styles.input}
            onChange={onChange}
            value={search}
            placeholder="Search"
          />
        </div>
        {search && (
          <div className={styles.searchMapCont}>
            {renderItemsByType("music")}
            {renderItemsByType("album")}
            {renderItemsByType("artist")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
