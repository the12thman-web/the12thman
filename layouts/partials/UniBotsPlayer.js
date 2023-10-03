import { useEffect } from 'react';

export const UniBotsPlayerComponent = ({ slot, adHeight, adWidth, isMobile }) => {
    useEffect(() => {
        if (window && typeof window !== 'undefined') {
            window.unibots = window.unibots || { cmd: [] };
            unibots.cmd.push(() => { unibotsPlayer("the12thman"); });
        }
    }, []);

    return (
        <></>
    );
};