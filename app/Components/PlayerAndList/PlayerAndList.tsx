'use client';

import React, { useRef, useEffect } from 'react';
import MusicListItem from '../MusicListItem/MusicListItem';
import DesktopPlayer from '../PlayerControler/DesktopPlayer/DesktopPlayer';
import NextPlay from './NextPlay/NextPlay';
import styles from './PlayerAndList.module.scss';
import { musicData } from '@/app/helpers/MusicData';
import { useRecoilState } from 'recoil';
import { currentIndexState, isPlayingState } from '@/app/state';
import useViewport from '@/app/helpers/UseViewport';

const PlayerAndList = () => {
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            console.log('haloo');
            audioRef.current.pause();
            audioRef.current.src = musicData[currentIndex]?.src || '';
            audioRef.current.play();
        }
    }, [currentIndex, audioRef]);

    const playTrack = (index: number) => {
        setCurrentIndex(index);
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseTrack = () => {
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const handleTrackEnd = () => {
        if (currentIndex < musicData.length - 1) {
            playTrack(currentIndex + 1);
        } else {
            pauseTrack();
        }
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.addEventListener('ended', handleTrackEnd);
            return () => {
                audioElement.removeEventListener('ended', handleTrackEnd);
            };
        }
    }, [currentIndex]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }, []);

    const listData = musicData.map((item) => ({
        image: '/images/natashaB.png',
        songTitle: 'Unwritten',
        artistName: 'Natasha Bedingfield',
        songDuration: '4:17',
        src: item.src,
    }));
    const { isMobile, isTablet } = useViewport();
    if (isMobile || isTablet) {
        return null;
    }

    return (
        <div className={styles.playerAndListBox}>
            <audio ref={audioRef} src={musicData[currentIndex]?.src} />
            <div className={styles.playerAndList}>
                <div className={styles.playerAndListContainer}>
                    <NextPlay />
                    <div className={styles.listDataContainer}>
                        {listData.map((item, index) => (
                            <MusicListItem
                                key={index}
                                image={item.image}
                                songTitle={item.songTitle}
                                artistName={item.artistName}
                                songDuration={item.songDuration}
                                src={item.src}
                                audioRef={audioRef}
                                isPlaying={isPlaying && currentIndex === index}
                                onClick={() => {
                                    if (isPlaying && currentIndex === index) {
                                        pauseTrack();
                                    } else {
                                        playTrack(index);
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <DesktopPlayer audioRef={audioRef} />
                </div>
            </div>
        </div>
    );
};

export default PlayerAndList;
