import { useEffect } from 'react';

 const UniBotsPlayerComponent = ({ slot, adHeight, adWidth, isMobile }) => {
  useEffect(() => {
    // Check if the window object is defined to avoid issues during server-side rendering
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');

      script.async = true;
      script.src = 'https://cdn.unibotscdn.com/ubplayer/player.js';
      script.defer = true;

      document.body.appendChild(script);

      // Define the unibots global variable and push the command
      window.unibots = window.unibots || { cmd: [] };
      window.unibots.cmd.push(() => {
        window.unibotsPlayer('the12thman');
      });

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return <></>;
};

export default UniBotsPlayerComponent