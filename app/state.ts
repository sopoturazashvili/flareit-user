import { atom } from "recoil";


export const isPlayingState = atom({
    key:"isPlaying",
    default: false
})

export const mutedState = atom({
    key:"muted",
    default:false
})

export const volumeState = atom({
    key:"volume",
    default: 50
})