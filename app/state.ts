import { atom } from 'recoil';

export const isPlayingState = atom({
    key: 'isPlaying',
    default: false,
});

export const mutedState = atom({
    key: 'muted',
    default: false,
});

export const volumeState = atom({
    key: 'volume',
    default: 50,
});

export const currentTimeState = atom({
    key: 'currentTime',
    default: 0,
});

export const audioDurrationState = atom({
    key: 'audioDurration',
    default: 0,
});

export const tabletFullScrenState = atom({
    key: 'tabletFullScreenState',
    default: false,
});

export const fullScreenState = atom({
    key: 'fullscreen',
    default: false,
});

export const musicGlobalState = atom<string[]>({
    key: 'musicGlobalState',
    default: [],
});

export const indexState = atom({
    key: 'index',
    default: 0,
});

export const musicId = atom({
    key: 'musicId',
    default: 1,
});

export const shouldAddTimeState = atom({
    key: 'shouldAddTime',
    default: false,
});

export const shouldRewindState = atom({
    key: 'shouldRewindState',
    default: false,
});

export const globalImageState = atom<string[]>({
    key: 'globalImage',
    default: [],
});

export const musicNameState = atom<string[]>({
    key: 'musicName',
    default: [],
});
export const authorNameState = atom<string[]>({
    key: 'authorName',
    default: [],
});

export const showNavMobileState = atom({
    key: 'showNavMobileState',
    default: true,
});
