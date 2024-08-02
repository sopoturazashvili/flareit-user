'use client';
import { useEffect, useMemo, useState } from 'react';

const useViewport = () => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        setWidth(window?.innerWidth);
        setHeight(window?.innerHeight);

        const handleWindowResize = () => {
            setWidth(window ? window.innerWidth : 0);
            setHeight(window ? window.innerHeight : 0);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const isMobile = useMemo(() => width >= 50 && width <= 640, [width]);
    const isTablet = useMemo(() => width > 640 && width <= 1100, [width]);
    const isDesktop = useMemo(() => width > 1007, [width]);

    const isXS = useMemo(() => width >= 50 && width <= 420, [width]);
    const isS = useMemo(() => width > 420 && width <= 640, [width]);
    const isM = useMemo(() => width > 640 && width <= 1007, [width]);
    const isL = useMemo(() => width > 1007 && width <= 1500, [width]);
    const isXL = useMemo(() => width > 1500, [width]);
    const antGreedLg = useMemo(() => width < 1200, [width]);

    return {
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isXS,
        isS,
        isM,
        isL,
        isXL,
        antGreedLg,
    };
};

export default useViewport;
