import { useEffect } from 'react';

const MGIDAd = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://jsc.mgid.com/t/h/the12thman.in.1528623.js';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  return <div id="M751792ScriptRootC1528623" />;
};

export default MGIDAd;
