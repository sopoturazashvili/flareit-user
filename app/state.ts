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

export const currentIndexState = atom({
    key: 'currentIndex',
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
