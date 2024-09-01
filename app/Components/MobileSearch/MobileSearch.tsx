'use client';
import Search from '../Header/Search/Search';
import styles from './MobileSearch.module.scss';

const MobileSearch = () => {
    return (
        <div className={styles.mobileSearch}>
            <div className={styles.searchContainer}>
                <div>
                    <p className={styles.search}>Search</p>
                </div>
                <div className={styles.mobileSearchContainer}>
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default MobileSearch;
