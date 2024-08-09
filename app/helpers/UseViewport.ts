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

    const isMobile = useMemo(() => width >= 50 && width <= 599, [width]);
    const isTablet = useMemo(() => width > 600 && width <= 1023, [width]);
    const isDesktop = useMemo(() => width > 1024, [width]);

    return {
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
    };
};

export default useViewport;
