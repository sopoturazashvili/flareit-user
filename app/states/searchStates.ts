import { atom } from 'recoil';

export const searchTermState = atom<string>({
    key: 'searchTerm',
    default: '',
});

export const searchRefState = atom<HTMLDivElement | null>({
    key: 'searchRef',
    default: null,
});
